# brendon.app

Brendon Zimmer's personal site, built with Next.js, React, TypeScript, and Tailwind CSS. Content lives in `src/data.ts` (projects and experience), `src/fun_data.ts` (personal collections), and `src/posts/` (project writeups).

## Development

```sh
bun install --frozen-lockfile
bun run dev
```

## Verify a change

```sh
bun run lint
bun run typecheck
bun run build
bun run test:smoke
```

The smoke test starts the production build on port 3100, then checks the homepage, project archive, project overview, and unknown-project 404. It also checks titles, page landmarks, headings, the hidden corner’s native transition, absence of document-wide snapping, nonempty links, browser-direct lazy image loading, and current biography copy.

Browser QA should cover narrow and wide screens, keyboard navigation, the three collection shelves, the hidden-corner reveal in both directions, short wheel movements near the footer, Back/Forward, and reduced-motion preferences.

## Framework versions

Latest stable npm releases verified on October 1, 2026: Next.js 16.3.8, React/React DOM 19.3.0, and Tailwind CSS 4.3.3. Tailwind uses its v4 PostCSS package and explicit legacy theme configuration so the existing palette and fonts stay intact. Supporting Tailwind plugins and class merging are upgraded for v4.

Tailwind v4 targets Safari 16.4+, Chrome 111+, and Firefox 128+.

## Content refresh

- Original page structure, slate/blue palette, monospace type, sticky identity column, and hidden dark-purple personal corner are restored from the live-site source
- The hidden corner remains a scrolling discovery, with a local native CSS crossfade replacing the 300vh gradient and mandatory root snap; shelves retain hidden scrollbars, hover motion, and touch press feedback
- Biography reflects the public Bloomberg/New York announcement and USC computer science graduation, magna cum laude, in 2025
- Rig leads the selected projects; older experiments remain in the archive
- The USC Course Notifier article is a concise overview, replacing unfinished placeholder text
- Old live-demo links and the unverified résumé link are omitted; available public source links remain
- Personal collections preserve previously published favorites rather than guessing new tastes
- ofCourse and TroyLabs show known start dates only; end dates need confirmation before adding full ranges

Public sources used for the refresh:

- https://www.linkedin.com/in/brendonzimmer
- https://www.linkedin.com/posts/brendonzimmer_so-excited-to-share-that-i-graduated-magna-activity-7359748659736948737-Np-6
- https://github.com/b-relay/rig
- https://github.com/brendonzimmer/factor
- https://github.com/brendonzimmer/music-garage
- https://github.com/brendonzimmer/ftov/tree/bw
- https://github.com/brendonzimmer/concordance
- Previously published experience and collections at https://brendon.app

## Deployment

Use a Vercel **Preview** deployment for review. Production promotion is a separate approval; do not deploy to production or change the `brendon.app` domain as part of preview review.

## Performance architecture

- Professional content and gallery markup are server rendered. Static external links use native anchors; only internal navigation uses Next Link.
- The project-detail hint is a small client island with Escape dismissal, replacing the tooltip/positioning library in the browser bundle. Its trigger and content remain server-rendered slots.
- The hidden-corner reveal is a native CSS view timeline on a local 160svh scene. A viewport-sized sticky surface crossfades using opacity over approximately 60svh, then yields to normal document flow. No wheel interception, scroll listener, per-frame React updates, or root scroll snapping.
- Unsupported browsers and reduced-motion visitors get a compact static gradient. No content is initially hidden or depends on JavaScript to appear.
- Shelves use native overflow and proximity snapping, with a single keyboard focus stop per shelf. Motion is gated by input capability and reduced-motion preferences. There is no carousel library or permanently promoted layer per card.
- The same Geist fonts are retained. Only the landing-page monospace font is preloaded; the sans face loads as needed. This changes request priority, not necessarily total font transfer.
- Artwork is loaded directly from the existing external providers. Do not introduce Vercel image proxying, local cover hosting, or a new paid image service: avoiding that transfer cost is intentional.

Native-animation references:
- https://developer.chrome.com/docs/css-ui/scroll-driven-animations
- https://webkit.org/blog/17184/so-many-ranges-so-little-time-a-cheatsheet-of-animation-ranges-for-your-next-scroll-driven-animation/
- https://webkit.org/blog/17862/webkit-features-for-safari-26-4/

Browser support is progressively enhanced via CSS feature detection rather than user-agent checks. Real iPhone gesture/address-bar behavior needs device validation; desktop browser zoom is only a responsive-layout check.

### Payload checks

`node scripts/measure-payload.mjs --output payload.json` records each prerendered route’s HTML, modern JavaScript, CSS, and font payloads. Use `--compare baseline.json` after a build for reproducible before/after measurements. JavaScript/HTML/CSS use local gzip level 9; these are payload measurements, not Lighthouse scores, Web Vitals, or a claim about device-specific latency.

The October 2, 2026 comparison uses a clean rebuild of commit `3188999` with the same Next/React versions. Home JavaScript falls from approximately 165.8 KB to 137.8 KB gzip (16.9%). The older live site uses Next 14/React 18 and has a smaller framework baseline, so it is not an equivalent bundle comparison.

For artwork, `scripts/gallery-image-report.json` records every verified external response and dimension. The same 59-image collection falls from 20.37 MB of original files to 1.23 MB at desktop 1× sizing (94% less), or 2.94 MB at desktop 2× (86% less). This is the complete collection if every shelf is visited, not initial-page transfer; native lazy loading defers offscreen images. The original live site eagerly preloads all 59 images; the new implementation does not preload any gallery image. See `scripts/GALLERY_IMAGES.md` for provider conventions and how to rerun the checks.
