import { cn } from "@/utils";

export function Divider({
  text,
  className,
  pt,
  sticky,
}: {
  text: string;
  pt?: `${string}-${number}`;
  className?: string;
  sticky?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center",
        pt,
        sticky &&
          "sticky top-0 z-10 bg-auto--/75 py-1 backdrop-blur-sm md:static",
      )}
    >
      <div className="w-full grow border-[0.5px] border-auto" />
      <span
        className={cn(
          "shrink px-4 text-sm font-semibold uppercase text-clr",
          className,
        )}
      >
        {text}
      </span>
      <div className="w-full grow border-[0.5px] border-auto" />
    </div>
  );
}
