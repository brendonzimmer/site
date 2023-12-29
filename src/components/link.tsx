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
  icon = "out",
  underline = true,
  className,
}: {
  text: string;
  italic?: string;
  href: string;
  target?: React.HTMLAttributeAnchorTarget;
  icon?: "left" | "right" | "out";
  underline?: boolean;
  className?: string;
}) {
  const icon_cn =
    "inline-block size-3 transition-transform group-hover/link:translate-x-0.5 group-focus-visible/link:translate-x-0.5 motion-reduce:transition-none";
  return (
    <Link
      className={cn(
        "group/link w-fit font-semibold leading-tight text-auto+",
        className,
      )}
      href={href}
      target={target}
      prefetch={target !== "_blank"}
    >
      {icon === "left" && (
        <span className="whitespace-nowrap">
          <ArrowRightIcon
            className={cn(
              icon_cn,
              "mb-0.5 mr-1 rotate-180 group-hover/link:-translate-x-[0.175rem] group-focus-visible/link:-translate-x-[0.175rem]",
            )}
          />
        </span>
      )}

      <span
        className={cn(
          "border-b-[1.5px] border-transparent pb-px transition motion-reduce:transition-none",
          underline && "group-hover/link:border-clr",
        )}
      >
        {italic && <span className="text-xs lowercase italic">{italic} </span>}
        {text}
      </span>

      {icon === "out" && (
        <span className="whitespace-nowrap">
          <ArrowOutIcon
            className={cn(
              icon_cn,
              "mb-2.5 ml-0.5 group-hover/link:-translate-y-0.5 group-focus-visible/link:-translate-y-0.5",
            )}
          />
        </span>
      )}

      {icon === "right" && (
        <span className="whitespace-nowrap">
          <ArrowRightIcon
            className={cn(
              icon_cn,
              "mb-0.5 ml-1 group-hover/link:translate-x-[0.175rem] group-focus-visible/link:translate-x-[0.175rem]",
            )}
          />
        </span>
      )}
    </Link>
  );
}
