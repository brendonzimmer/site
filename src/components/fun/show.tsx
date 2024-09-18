import type { Show } from "@/fun_data";

export function Show({ title, image }: Show) {
  return (
    <div className="w-32 transition-transform duration-150 lg:w-48 xl:hover:scale-[1.04] xl:active:scale-[0.98]">
      <img
        src={image}
        alt={`${title} cover`}
        className="aspect-[25/37] rounded object-cover shadow-lg"
      />
      <p className="line-clamp-2 text-balance pt-1 text-center text-base">
        {title}
      </p>
    </div>
  );
}
