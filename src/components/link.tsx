import { ArrowOutIcon, ArrowRightIcon } from "@/icons";
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

export function BlockLink({
  text,
  href,
  target,
  italic,
}: {
  text: string;
  italic?: string;
  href: string;
  target?: React.HTMLAttributeAnchorTarget;
}) {
  const icon_cn =
    "inline-block size-3 transition-colors group-hover/link:text-clr group-focus-visible/link:text-clr motion-reduce:transition-none";
  return (
    <Link
      className="group/link w-fit font-semibold leading-tight text-auto+"
      href={href}
      target={target}
      prefetch={target !== "_blank"}
    >
      <span className="border-b-[1.5px] border-transparent pb-px transition group-hover/link:border-clr motion-reduce:transition-none">
        {italic && <span className="text-xs lowercase italic">{italic} </span>}
        {text}
      </span>

      <span className="whitespace-nowrap">
        {target === "_blank" ? (
          <ArrowOutIcon className={cn(icon_cn, "mb-2.5 ml-0.5")} />
        ) : (
          <ArrowRightIcon className={cn(icon_cn, "mb-0.5 ml-1")} />
        )}
      </span>
    </Link>
  );
}
