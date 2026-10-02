# Browser-direct gallery images

The gallery continues to load artwork from its original third-party providers.
No gallery image files are hosted in `public`, no images are proxied through
`/_next/image`, and no image transformation or transfer runs on Vercel.
`src/fun_data.ts` keeps the original URLs, artwork, titles, authors, and order.

`GalleryImage` is a server component that renders a native image. It includes
descriptive alt text, explicit dimensions, native lazy loading, asynchronous
decoding, and responsive provider URLs. There is no per-image client hydration.
The original card dimensions and CSS aspect ratio/object-cover crop are preserved.

## Provider sizing

- IMDb/Amazon: preserve the opaque image ID and request the existing `UX` width
  transformation at 128, 192, 256, 384 and 576px. The original data already uses
  `UX1000` and `UX371`; every generated URL is verified by the network audit.
  This is an observed provider convention, not a promised public API contract.
- Last.fm: use its album-page/API sizes `174s`, `300x300`, plus the existing 500px
  image. [Album API](https://www.last.fm/api/show/album.getInfo) and
  [album-page artwork](https://www.last.fm/music/Mac%2BMiller/Swimming)
- Apple Music: request the documented width/height parameters at the same five
  responsive widths. [Artwork documentation](https://developer.apple.com/documentation/applemusicapi/artwork)
- TMDB: use its poster presets 154, 185, 342, and the existing 500px image.
  [Image sizing](https://developer.themoviedb.org/docs/image-basics) and
  [published poster presets](https://www.themoviedb.org/talk/5ca37ad692514140e049a0ed)
- Wikimedia and any unknown or signed URL: keep the original image unchanged.

Exact hostname/path checks avoid altering unrelated or signed URLs. The browser
selects a candidate for 128px cards below 1024px and 192px cards above it, according
to its pixel density and connection preferences. External availability and cache
policies remain controlled by those existing providers.

## Verification

Run `node scripts/check-gallery-images.mjs` for offline source/provider/geometry
regression tests. After editing image sources or CDN transformations, also run
`node scripts/check-gallery-images.mjs --network` to request every candidate,
verify successful image responses, decode actual dimensions, check aspect ratios,
and record exact byte totals in `scripts/gallery-image-report.json`.

The network audit uses sharp only as a development-time decoder. Downloads are
cached under ignored `node_modules/.cache/gallery-sources` for byte/visual
comparison, never committed, deployed, or served. The report compares one original
or responsive candidate for every cover; it is not an initial-page transfer
measurement because lazy loading only requests images near the viewport.
