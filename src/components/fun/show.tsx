import type { Show } from "@/fun_data";
import { GalleryImage } from "./gallery-image";

export function Show({ title, image }: Show) {
  return (
    <div className="collection-card w-32 lg:w-48">
      <GalleryImage
        src={image}
        width={192}
        height={284}
        alt={`${title} cover`}
        className="aspect-[25/37] rounded object-cover shadow-lg"
      />
      <p className="line-clamp-2 pt-1 text-center text-base text-balance">
        {title}
      </p>
    </div>
  );
}
