import { cn } from "@/utils";

export function Divider({
  text,
  className,
  pt,
}: {
  text: string;
  pt?: `${string}-${number}`;
  className?: string;
}) {
  return (
    <div className={"flex items-center " + pt}>
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
