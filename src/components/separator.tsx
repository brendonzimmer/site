import { cn } from "@/utils";

export function Separator({ className }: { className?: string }) {
  return <hr className={cn("w-full border-[0.5px] border-auto", className)} />;
}
