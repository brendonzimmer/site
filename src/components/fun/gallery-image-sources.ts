export type GalleryImageCandidate = { src: string; width: number };

const responsiveWidths = [128, 192, 256, 384, 576];

/**
 * Resize on the original provider's CDN, never on this site's host.
 * Patterns and all current candidate URLs are covered by check-gallery-images.
 * Unknown providers keep their original URL rather than being proxied.
 */
export function getGalleryImageCandidates(
  src: string,
): GalleryImageCandidate[] {
  let url: URL;
  try {
    url = new URL(src);
  } catch {
    return [];
  }
  if (url.protocol !== "https:" || url.search || url.hash) return [];

  // IMDb's existing artwork already uses _V1_FMjpg_UX1000_/UX371_. Only
  // change that width transformation, preserving the opaque image identifier.
  if (
    url.hostname === "m.media-amazon.com" &&
    /^\/images\/M\/.+\._V1_[^/]*\.jpg$/.test(url.pathname)
  ) {
    return responsiveWidths.map((width) => ({
      src: src.replace(/\._V1_[^/]+$/, `._V1_FMjpg_UX${width}_.jpg`),
      width,
    }));
  }

  // Last.fm's own album pages/API use 174s and 300x300. Retain the existing
  // 500px artwork as the high-density candidate instead of inventing sizes.
  if (
    url.hostname === "lastfm.freetls.fastly.net" &&
    /^\/i\/u\/500x500\/[^/]+$/.test(url.pathname)
  ) {
    return [
      { src: src.replace("/500x500/", "/174s/"), width: 174 },
      { src: src.replace("/500x500/", "/300x300/"), width: 300 },
      { src, width: 500 },
    ];
  }

  // Apple Music artwork URLs have documented width x height parameters.
  if (
    url.hostname === "is1-ssl.mzstatic.com" &&
    /\/592x592bb\.webp$/.test(url.pathname)
  ) {
    return responsiveWidths.map((width) => ({
      src: src.replace(/592x592bb\.webp$/, `${width}x${width}bb.webp`),
      width,
    }));
  }

  // Use TMDB's published poster-size presets on the existing image host.
  if (
    url.hostname === "media.themoviedb.org" &&
    /^\/t\/p\/w500\/[^/]+$/.test(url.pathname)
  ) {
    return [154, 185, 342, 500].map((width) => ({
      src: src.replace("/w500/", `/w${width}/`),
      width,
    }));
  }

  // The one Wikimedia PNG and any future unsupported source remain unchanged.
  return [];
}

export function getGalleryImageSources(src: string) {
  const candidates = getGalleryImageCandidates(src);
  return {
    src: candidates.find((candidate) => candidate.width >= 192)?.src ?? src,
    srcSet: candidates.length
      ? candidates
          .map((candidate) => `${candidate.src} ${candidate.width}w`)
          .join(", ")
      : undefined,
    sizes: candidates.length ? "(min-width: 1024px) 192px, 128px" : undefined,
  };
}
