import { spawn } from "node:child_process";
import assert from "node:assert/strict";

const server = spawn(
  process.execPath,
  [
    "node_modules/next/dist/bin/next",
    "start",
    "--hostname",
    "127.0.0.1",
    "--port",
    "3100",
  ],
  { stdio: ["ignore", "pipe", "pipe"] },
);
let output = "";
server.stdout.on("data", (data) => {
  output += data;
});
server.stderr.on("data", (data) => {
  output += data;
});
try {
  let ready = false;
  for (let i = 0; i < 60; i++) {
    try {
      const response = await fetch("http://127.0.0.1:3100/", {
        signal: AbortSignal.timeout(1000),
      });
      if (response.ok) {
        ready = true;
        break;
      }
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 300));
  }
  assert(ready, `Server did not start: ${output}`);
  const titles = new Set();
  for (const route of ["/", "/projects", "/projects/ofc"]) {
    const response = await fetch(`http://127.0.0.1:3100${route}`);
    assert.equal(response.status, 200, route);
    const html = await response.text();
    assert.equal((html.match(/<h1\b/g) || []).length, 1, `${route}: one h1`);
    assert.equal(
      (html.match(/<main\b/g) || []).length,
      1,
      `${route}: one main`,
    );
    assert(html.includes('id="main-content"'), `${route}: skip-link target`);
    assert(!/<a\b[^>]*href="\s*"/.test(html), `${route}: no empty links`);
    const title = html.match(/<title>(.*?)<\/title>/)?.[1];
    assert(title, `${route}: page title`);
    titles.add(title);
    if (route === "/") {
      assert(
        html.includes("Bloomberg") && html.includes("New York"),
        "Updated biography",
      );
      assert(!html.includes("approach graduation"), "No stale graduation copy");
      const images = html.match(/<img\b[^>]*>/g) || [];
      assert(images.length > 0, "Gallery images present");
      for (const image of images) {
        assert(image.includes('loading="lazy"'), "Lazy gallery image");
        assert(/alt="[^"]+"/.test(image), "Descriptive image alt");
        assert(
          image.includes("width=") && image.includes("height="),
          "Intrinsic image dimensions",
        );
      }
      assert(html.includes("h-[300vh]"), "Original gradient transition");
      assert(html.includes("snap-mandatory"), "Original scroll snapping");
      assert(html.includes("scrollbar-none"), "Hidden shelf scrollbars");
      assert(!html.includes('href="#corner"'), "Corner stays undisclosed");
      assert(
        !html.includes("collection-controls"),
        "No added gallery controls",
      );
    }
    if (route === "/projects/ofc")
      assert(!html.includes("lorem ipsum"), "No placeholder article copy");
    console.log(
      `PASS ${route}: HTTP 200, landmarks, heading, title, links, content`,
    );
  }
  assert.equal(titles.size, 3, "Unique page titles");
  assert.equal(
    (await fetch("http://127.0.0.1:3100/projects/does-not-exist")).status,
    404,
  );
  console.log("PASS unknown project: HTTP 404");
} finally {
  server.kill();
}
