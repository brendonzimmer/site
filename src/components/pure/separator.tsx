import { cn } from "@/utils";

export function Separator({ className }: { className?: string }) {
  return <hr className={cn("w-full border-[0.5px] border-auto", className)} />;
}

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
      <Separator className="grow" />
      <span
        className={cn(
          "shrink px-4 text-sm font-semibold uppercase text-clr",
          className,
        )}
      >
        {text}
      </span>
      <Separator className="grow" />
    </div>
  );
}
