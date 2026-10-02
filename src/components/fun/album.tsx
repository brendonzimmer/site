import Image from "next/image";
import type { Album } from "@/fun_data";

export function Album({ title, image, author }: Album) {
  return (
    <div className="w-32 transition-transform duration-150 active:scale-[0.98] lg:w-48 xl:hover:scale-[1.04]">
      <Image
        src={image}
        width={192}
        height={192}
        unoptimized
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
