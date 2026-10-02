import type { Album } from "@/fun_data";
import { GalleryImage } from "./gallery-image";

export function Album({ title, image, author }: Album) {
  return (
    <div className="collection-card w-32 lg:w-48">
      <GalleryImage
        src={image}
        width={192}
        height={192}
        alt={`${title} by ${author} album cover`}
        className="aspect-square rounded object-cover shadow-lg"
      />
      <p className="line-clamp-2 pt-1 text-center text-base text-balance">
        {title}
      </p>
      <p className="line-clamp-1 text-center text-xs text-balance">{author}</p>
    </div>
  );
}
