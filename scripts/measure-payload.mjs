#!/usr/bin/env node
/**
 * Measure prerendered production payloads without starting a server or browser.
 *
 * node scripts/measure-payload.mjs --output payload.json
 * node scripts/measure-payload.mjs --input ../artifacts/performance/baseline-3188999 \
 *   --page /=home.html --page /projects=projects.html \
 *   --page /projects/ofc=article.html --label baseline-3188999 --output baseline.json
 * node scripts/measure-payload.mjs --compare baseline.json --output after.json
 *
 * gzip9 is a reproducible comparison, not a measurement of CDN wire transfer.
 * Inline scripts are already counted in HTML. nomodule scripts are excluded.
 * Lazy images, route prefetch, headers, and browser CPU/Web Vitals are not measured.
 */
import { createHash } from "node:crypto";
import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  writeFileSync,
} from "node:fs";
import { dirname, relative, resolve, sep } from "node:path";
import { gzipSync } from "node:zlib";

const options = { input: ".next", pages: [] };
const args = process.argv.slice(2);
for (let i = 0; i < args.length; i++) {
  const arg = args[i];
  if (arg === "--help" || arg === "-h") {
    console.log(`Usage: node scripts/measure-payload.mjs [options]
  --input DIR       Production build or snapshot root (default: .next)
  --page ROUTE=FILE  Select an HTML file relative to input; may be repeated
  --label TEXT      Descriptive measurement label
  --compare FILE    Compare route totals with a previous JSON report
  --output FILE     Save JSON instead of printing it
Without --page, discover public HTML routes under server/app.
Assets are read from INPUT/static; this script makes no network requests.`);
    process.exit(0);
  }
  if (
    !["--input", "--page", "--label", "--compare", "--output"].includes(arg)
  ) {
    throw new Error(`Unknown option: ${arg}`);
  }
  const value = args[++i];
  if (!value || value.startsWith("--"))
    throw new Error(`Missing value for ${arg}`);
  if (arg === "--page") {
    const equals = value.indexOf("=");
    if (equals < 1 || equals === value.length - 1) {
      throw new Error("--page must have the form /route=relative/file.html");
    }
    options.pages.push({
      route: value.slice(0, equals),
      file: value.slice(equals + 1),
    });
  } else {
    options[arg.slice(2)] = value;
  }
}
const root = resolve(options.input);

function withinRoot(path) {
  const resolved = resolve(root, path);
  const fromRoot = relative(root, resolved);
  if (fromRoot === ".." || fromRoot.startsWith(`..${sep}`)) {
    throw new Error(`Asset or HTML path leaves input directory: ${path}`);
  }
  return resolved;
}

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if (entry.name.startsWith("_")) return [];
    const path = resolve(directory, entry.name);
    return entry.isDirectory()
      ? walk(path)
      : path.endsWith(".html")
        ? [path]
        : [];
  });
}
if (!options.pages.length) {
  const app = resolve(root, "server/app");
  if (!existsSync(app))
    throw new Error(`No ${app}; build first or supply --page`);
  options.pages = walk(app).map((file) => {
    const name = relative(app, file)
      .split(sep)
      .join("/")
      .replace(/\.html$/, "");
    return {
      route: name === "index" ? "/" : `/${name}`,
      file: relative(root, file),
    };
  });
}
if (!options.pages.length) throw new Error("No prerendered HTML pages found");
if (
  new Set(options.pages.map((page) => page.route)).size !== options.pages.length
) {
  throw new Error("Duplicate route in --page arguments");
}

const localOrigin = "https://payload-audit.invalid";
function decodeEntities(value) {
  return value.replace(
    /&(?:amp|quot|apos|lt|gt|#\d+|#x[\da-f]+);/gi,
    (entity) => {
      const named = {
        "&amp;": "&",
        "&quot;": '"',
        "&apos;": "'",
        "&lt;": "<",
        "&gt;": ">",
      };
      const lower = entity.toLowerCase();
      if (named[lower]) return named[lower];
      const hex = lower.startsWith("&#x");
      return String.fromCodePoint(
        parseInt(entity.slice(hex ? 3 : 2, -1), hex ? 16 : 10),
      );
    },
  );
}
function attributes(text) {
  const result = {};
  for (const match of text.matchAll(
    /([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g,
  )) {
    result[match[1].toLowerCase()] = decodeEntities(
      match[2] ?? match[3] ?? match[4] ?? "",
    );
  }
  return result;
}
function size(buffer) {
  return {
    rawBytes: buffer.length,
    gzip9Bytes: gzipSync(buffer, { level: 9 }).length,
  };
}
function total(resources) {
  return {
    count: resources.length,
    rawBytes: resources.reduce((sum, item) => sum + item.rawBytes, 0),
    gzip9Bytes: resources.reduce((sum, item) => sum + item.gzip9Bytes, 0),
  };
}
const measured = new Map();
function measureAsset(url, base = `${localOrigin}/`) {
  const normalized = new URL(url, base);
  if (
    normalized.origin !== localOrigin ||
    !normalized.pathname.startsWith("/_next/static/")
  ) {
    return null;
  }
  const path = normalized.pathname;
  if (!measured.has(path)) {
    const file = withinRoot(decodeURIComponent(path.slice("/_next/".length)));
    if (!existsSync(file)) throw new Error(`Missing referenced asset: ${file}`);
    const buffer = readFileSync(file);
    measured.set(path, {
      path,
      ...size(buffer),
      sha256: createHash("sha256").update(buffer).digest("hex"),
    });
  }
  return measured.get(path);
}
function assetGroup(urls, unmeasured, category) {
  const unique = new Map();
  for (const url of urls) {
    const resource = measureAsset(url);
    if (resource) unique.set(resource.path, resource);
    else unmeasured.push({ category, url });
  }
  return [...unique.values()].sort((a, b) => a.path.localeCompare(b.path));
}

const pages = options.pages
  .sort((a, b) => a.route.localeCompare(b.route))
  .map(({ route, file }) => {
    const buffer = readFileSync(withinRoot(file));
    const html = buffer.toString("utf8");
    // Next-generated HTML has escaped attributes. Consume entire script/style bodies
    // before looking for tags, so serialized RSC strings cannot create false assets.
    const scripts = [
      ...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi),
    ].map((match) => ({
      attrs: attributes(match[1]),
      body: match[2],
    }));
    const markup = html.replace(
      /<(script|style)\b[^>]*>[\s\S]*?<\/\1\s*>/gi,
      "",
    );
    const links = [...markup.matchAll(/<link\b([^>]*)>/gi)].map((match) =>
      attributes(match[1]),
    );
    const images = [...markup.matchAll(/<img\b([^>]*)>/gi)].map((match) =>
      attributes(match[1]),
    );
    const legacyUrls = new Set(
      scripts
        .filter(({ attrs }) => "nomodule" in attrs)
        .map(({ attrs }) => attrs.src),
    );
    const modernUrls = new Set(
      scripts
        .filter(({ attrs }) => attrs.src && !("nomodule" in attrs))
        .map(({ attrs }) => attrs.src),
    );
    for (const link of links) {
      if (
        (link.rel === "modulepreload" ||
          (link.rel === "preload" && link.as === "script")) &&
        link.href &&
        !legacyUrls.has(link.href)
      ) {
        modernUrls.add(link.href);
      }
    }
    const unmeasured = [];
    const modernJs = assetGroup(modernUrls, unmeasured, "modernJs");
    const css = assetGroup(
      links
        .filter((link) => link.rel === "stylesheet")
        .map((link) => link.href)
        .filter(Boolean),
      unmeasured,
      "css",
    );
    const preloadedFonts = assetGroup(
      links
        .filter((link) => link.rel === "preload" && link.as === "font")
        .map((link) => link.href)
        .filter(Boolean),
      unmeasured,
      "preloadedFonts",
    );
    const referencedFontMap = new Map(
      preloadedFonts.map((font) => [font.path, font]),
    );
    for (const stylesheet of css) {
      const text = readFileSync(
        withinRoot(stylesheet.path.slice("/_next/".length)),
        "utf8",
      );
      for (const match of text.matchAll(
        /url\(\s*["']?([^\s"')]+\.(?:woff2?|otf|ttf)(?:\?[^\s"')]*)?)["']?\s*\)/gi,
      )) {
        const font = measureAsset(
          match[1],
          new URL(stylesheet.path, localOrigin),
        );
        if (font) referencedFontMap.set(font.path, font);
        else unmeasured.push({ category: "cssReferencedFont", url: match[1] });
      }
    }
    const referencedFonts = [...referencedFontMap.values()].sort((a, b) =>
      a.path.localeCompare(b.path),
    );
    const htmlSize = size(buffer);
    const totals = {
      html: htmlSize,
      modernJs: total(modernJs),
      css: total(css),
      preloadedFonts: total(preloadedFonts),
      cssReferencedFonts: total(referencedFonts),
      // Two distinct inventories, not predictions of browser load order.
      declaredNormalizedBytes:
        htmlSize.gzip9Bytes +
        total(modernJs).gzip9Bytes +
        total(css).gzip9Bytes +
        total(preloadedFonts).rawBytes,
      includingAllReferencedFontsNormalizedBytes:
        htmlSize.gzip9Bytes +
        total(modernJs).gzip9Bytes +
        total(css).gzip9Bytes +
        total(referencedFonts).rawBytes,
    };
    return {
      route,
      htmlFile: file,
      totals,
      inlineScriptRawBytes: scripts
        .filter(({ attrs }) => !attrs.src)
        .reduce((sum, { body }) => sum + Buffer.byteLength(body), 0),
      excludedNomoduleUrls: [...legacyUrls].filter(Boolean),
      images: {
        count: images.length,
        lazyCount: images.filter((image) => image.loading === "lazy").length,
        dimensionedCount: images.filter((image) => image.width && image.height)
          .length,
        preloadCount: links.filter(
          (link) => link.rel === "preload" && link.as === "image",
        ).length,
        uniqueSourceCount: new Set(
          images.map((image) => image.src).filter(Boolean),
        ).size,
        externalSourceCount: images.filter((image) =>
          /^https?:\/\//.test(image.src ?? ""),
        ).length,
        responsiveSourceCount: images.filter((image) => image.srcset).length,
      },
      resources: {
        modernJs,
        css,
        preloadedFonts,
        cssReferencedFonts: referencedFonts,
      },
      unmeasured,
    };
  });
const report = {
  schemaVersion: 1,
  label: options.label ?? "production-build",
  inputRoot: root,
  measuredAt: new Date().toISOString(),
  methodology: {
    runtime: { node: process.version, zlib: process.versions.zlib },
    compression:
      "gzip level 9; native WOFF2 bytes retained for normalized totals",
    excluded:
      "nomodule polyfills, images, favicon, route prefetch, request/response headers, TLS, browser runtime and CPU",
    fontCaveat:
      "Removing a preload changes declaredNormalizedBytes but may not stop a font request; compare includingAllReferencedFontsNormalizedBytes too",
    scope:
      "Static resource inventory only; no network, browser, Web Vitals, or claims about initial lazy-loading behavior",
  },
  pages,
};
if (options.compare) {
  const before = JSON.parse(readFileSync(resolve(options.compare), "utf8"));
  report.comparison = {
    baselineLabel: before.label,
    pages: pages.map((page) => {
      const prior = before.pages.find(
        (candidate) => candidate.route === page.route,
      );
      if (!prior) return { route: page.route, missingBaseline: true };
      function delta(oldValue, newValue) {
        return {
          before: oldValue,
          after: newValue,
          deltaBytes: newValue - oldValue,
          percentChange: oldValue
            ? Number(((newValue / oldValue - 1) * 100).toFixed(2))
            : null,
        };
      }
      return {
        route: page.route,
        htmlGzip9: delta(
          prior.totals.html.gzip9Bytes,
          page.totals.html.gzip9Bytes,
        ),
        modernJsGzip9: delta(
          prior.totals.modernJs.gzip9Bytes,
          page.totals.modernJs.gzip9Bytes,
        ),
        modernJsRaw: delta(
          prior.totals.modernJs.rawBytes,
          page.totals.modernJs.rawBytes,
        ),
        cssGzip9: delta(
          prior.totals.css.gzip9Bytes,
          page.totals.css.gzip9Bytes,
        ),
        preloadedFontsRaw: delta(
          prior.totals.preloadedFonts.rawBytes,
          page.totals.preloadedFonts.rawBytes,
        ),
        cssReferencedFontsRaw: delta(
          prior.totals.cssReferencedFonts.rawBytes,
          page.totals.cssReferencedFonts.rawBytes,
        ),
        declaredNormalized: delta(
          prior.totals.declaredNormalizedBytes,
          page.totals.declaredNormalizedBytes,
        ),
        includingAllReferencedFontsNormalized: delta(
          prior.totals.includingAllReferencedFontsNormalizedBytes,
          page.totals.includingAllReferencedFontsNormalizedBytes,
        ),
      };
    }),
  };
}
const output = `${JSON.stringify(report, null, 2)}\n`;
if (options.output) {
  const file = resolve(options.output);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, output);
  console.error(`Wrote ${file}`);
} else {
  process.stdout.write(output);
}
