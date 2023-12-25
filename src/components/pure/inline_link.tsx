import { cn } from "@/utils";
import Link from "next/link";

export function InlineLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className={cn(
        "font-semibold text-auto+ transition-colors duration-150 ease-linear hover:text-clr focus-visible:text-clr",
        className,
      )}
    >
      {children}
    </Link>
  );
}
