import { getGalleryImageSources } from "./gallery-image-sources";

type GalleryImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
};

/** Browser-direct CDN images need no site-hosted optimizer or client hydration. */
export function GalleryImage({ src, alt, ...props }: GalleryImageProps) {
  return (
    // Keep provider resizing and image transfer off this site's image optimizer.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...props}
      {...getGalleryImageSources(src)}
      alt={alt}
      loading="lazy"
      decoding="async"
    />
  );
}
