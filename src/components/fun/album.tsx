import type { Album } from "@/fun_data";

export function Album({ title, image, author }: Album) {
  return (
    <div className="w-32 transition-transform duration-150 lg:w-48 xl:hover:scale-[1.04] xl:active:scale-[0.98]">
      <img
        src={image}
        alt={`${title} by ${author} album cover`}
        className="aspect-square rounded object-cover shadow-lg"
      />
      <p className="line-clamp-2 text-balance pt-1 text-center text-base">
        {title}
      </p>
      <p className="line-clamp-1 text-balance text-center text-xs">{author}</p>
    </div>
  );
}
