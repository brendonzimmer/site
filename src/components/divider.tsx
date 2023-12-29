import { cn } from "@/utils";

export function Divider({
  text,
  as,
  className,
  pt,
  sticky,
}: {
  text: string;
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  pt?: `${string}-${number}`;
  className?: string;
  sticky?: boolean;
}) {
  const As = as;
  return (
    <div
      className={cn(
        "flex items-center",
        pt,
        sticky && "sticky top-0 z-10 bg-auto--/75 backdrop-blur lg:static",
        className,
      )}
    >
      <div className="w-full grow border-[0.5px] border-auto" />
      <As className="shrink px-4 text-sm font-semibold uppercase text-clr">
        {text}
      </As>
      <div className="w-full grow border-[0.5px] border-auto" />
    </div>
  );
}
