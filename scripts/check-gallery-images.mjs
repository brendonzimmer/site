/** Offline regression checks by default; --network audits every provider URL. */
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import ts from "typescript";

const root = fileURLToPath(new URL("../", import.meta.url));
const cacheDirectory = path.join(root, "node_modules/.cache/gallery-sources");
const reportPath = path.join(root, "scripts/gallery-image-report.json");
const hash = (buffer) => createHash("sha256").update(buffer).digest("hex");

async function importDataModule(filename) {
  const text = await readFile(path.join(root, filename), "utf8");
  const { outputText } = ts.transpileModule(text, {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ES2022,
    },
  });
  return import(
    `data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`
  );
}

const { movies, series, albums } = await importDataModule("src/fun_data.ts");
const { getGalleryImageCandidates, getGalleryImageSources } =
  await importDataModule("src/components/fun/gallery-image-sources.ts");
const items = [...albums, ...movies, ...series];

for (const { title, image } of items) {
  const result = getGalleryImageSources(image);
  const candidates = getGalleryImageCandidates(image);
  const original = new URL(image);
  if (
    [
      "m.media-amazon.com",
      "lastfm.freetls.fastly.net",
      "is1-ssl.mzstatic.com",
      "media.themoviedb.org",
    ].includes(original.hostname)
  ) {
    assert(
      candidates.length > 0,
      `${title}: existing provider must have responsive candidates`,
    );
  }
  assert.equal(
    new URL(result.src).origin,
    original.origin,
    `${title}: same provider, no proxy`,
  );
  assert(
    !result.src.includes("/_next/image"),
    `${title}: no hosted optimization`,
  );
  assert.equal(
    new Set(candidates.map(({ width }) => width)).size,
    candidates.length,
    `${title}: unique widths`,
  );
  assert.deepEqual(
    candidates.map(({ width }) => width),
    candidates.map(({ width }) => width).sort((a, b) => a - b),
    `${title}: ascending widths`,
  );
  for (const candidate of candidates) {
    assert.equal(
      new URL(candidate.src).origin,
      original.origin,
      `${title}: same origin`,
    );
    assert(
      candidate.width > 0 && candidate.width <= 576,
      `${title}: bounded dimensions`,
    );
  }
  if (!candidates.length)
    assert.equal(result.src, image, `${title}: unknown sources preserved`);
  else
    assert.equal(
      result.sizes,
      "(min-width: 1024px) 192px, 128px",
      `${title}: existing card geometry`,
    );
}
for (const src of [
  "/local.png",
  "https://example.com/original.png",
  "http://m.media-amazon.com/images/M/id._V1_.jpg",
  "https://m.media-amazon.com.evil.example/images/M/id._V1_.jpg",
  "https://lastfm.freetls.fastly.net/i/u/500x500/id.jpg?signature=keep",
]) {
  assert.deepEqual(
    getGalleryImageSources(src),
    { src, srcSet: undefined, sizes: undefined },
    "Unknown/signed sources stay untouched",
  );
}
console.log(
  `PASS: ${items.length} covers retain original providers, responsive widths, intrinsic card sizing and safe fallbacks`,
);

const args = process.argv.slice(2);
assert(
  args.every((arg) => arg === "--network"),
  "Only --network is supported",
);
if (args.includes("--network")) {
  await mkdir(cacheDirectory, { recursive: true });
  async function measure(src, cachedOriginal = false) {
    const cachedPath = path.join(cacheDirectory, `${hash(src)}.source`);
    let bytes;
    if (cachedOriginal) {
      try {
        bytes = await readFile(cachedPath);
      } catch (error) {
        if (error.code !== "ENOENT") throw error;
      }
    }
    if (!bytes) {
      let lastError;
      for (let attempt = 0; attempt < 3; attempt += 1) {
        try {
          const response = await fetch(src, {
            signal: AbortSignal.timeout(45_000),
          });
          assert(response.ok, `HTTP ${response.status}: ${src}`);
          assert(
            response.headers.get("content-type")?.startsWith("image/"),
            `Not an image: ${src}`,
          );
          bytes = Buffer.from(await response.arrayBuffer());
          await writeFile(cachedPath, bytes);
          break;
        } catch (error) {
          lastError = error;
          if (attempt < 2)
            await new Promise((resolve) =>
              setTimeout(resolve, 1000 * (attempt + 1)),
            );
        }
      }
      if (!bytes) throw lastError;
    }
    const metadata = await sharp(bytes).metadata();
    return {
      src,
      bytes: bytes.length,
      width: metadata.width,
      height: metadata.height,
      sha256: hash(bytes),
    };
  }
  const results = new Map();
  let cursor = 0;
  async function worker() {
    while (cursor < items.length) {
      const item = items[cursor++];
      const original = await measure(item.image, true);
      const candidates = getGalleryImageCandidates(item.image);
      const variants = [];
      for (const candidate of candidates) {
        const result = await measure(candidate.src);
        assert.equal(
          result.width,
          candidate.width,
          `${item.title}: advertised width must be actual width`,
        );
        const sourceRatio = original.width / original.height;
        assert(
          Math.abs(result.width / result.height - sourceRatio) < 0.01,
          `${item.title}: preserve artwork aspect ratio`,
        );
        variants.push(result);
      }
      results.set(item.image, { title: item.title, original, variants });
      console.log(
        `${results.size}/${items.length} ${item.title}: ${variants.length || 1} direct-CDN image URLs verified`,
      );
    }
  }
  await Promise.all(Array.from({ length: 4 }, () => worker()));
  const entries = items.map((item) => results.get(item.image));
  const originalBytes = entries.reduce(
    (sum, entry) => sum + entry.original.bytes,
    0,
  );
  const atRequestedWidth = Object.fromEntries(
    [128, 192, 256, 384, 576].map((width) => {
      const bytes = entries.reduce(
        (sum, entry) =>
          sum +
          (
            entry.variants.find((variant) => variant.width >= width) ??
            entry.variants.at(-1) ??
            entry.original
          ).bytes,
        0,
      );
      return [
        width,
        {
          bytes,
          reductionPercent: Number(
            ((1 - bytes / originalBytes) * 100).toFixed(2),
          ),
        },
      ];
    }),
  );
  const report = {
    methodology:
      "Exact response body bytes across all gallery entries. Originals are cached baseline bytes; every responsive CDN variant was requested and decoded for this audit. For each requested width select the smallest sufficient candidate, or largest available. Browser selection may vary; native lazy loading avoids requesting all covers during initial load. No image is hosted or optimized by this site.",
    totals: { count: items.length, originalBytes, atRequestedWidth },
    entries,
  };
  await writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`);
  console.log(JSON.stringify(report.totals, null, 2));
}
