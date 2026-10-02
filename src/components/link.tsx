import { ArrowOutIcon, ArrowRightIcon, ChevronRightIcon } from "@/icons";
import { cn } from "@/utils";
import Link from "next/link";

export function InlineLink({
  href,
  target,
  ariaLabel,
  className,
  children,
}: {
  href: string;
  target?: React.HTMLAttributeAnchorTarget;
  ariaLabel?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const Anchor = href.startsWith("/") ? Link : "a";
  return (
    <Anchor
      href={href}
      target={target ?? "_blank"}
      rel={
        (target ?? "_blank") === "_blank" ? "noopener noreferrer" : undefined
      }
      className={cn(
        "font-semibold text-ink transition-colors duration-150 ease-linear hover:text-clr focus-visible:text-clr",
        className,
      )}
      aria-label={ariaLabel}
    >
      {children}
    </Anchor>
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
  ariaLabel,
}: {
  text: string;
  italic?: string;
  href: string;
  target?: React.HTMLAttributeAnchorTarget;
  icon?: "left" | "right" | "out" | "chevron-right";
  underline?: boolean;
  className?: string;
  ariaLabel?: string;
}) {
  const Anchor = href.startsWith("/") ? Link : "a";
  const icon_cn =
    "inline-block size-3 transition-transform group-hover/link:translate-x-0.5 group-focus-visible/link:translate-x-0.5 motion-reduce:transition-none";
  return (
    <Anchor
      aria-label={ariaLabel}
      className={cn(
        "group/link w-fit leading-tight font-semibold text-ink",
        className,
      )}
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
    >
      <div className="w-fit leading-[1.375] text-pretty">
        {icon === "left" && (
          <ArrowRightIcon
            className={cn(
              icon_cn,
              "mr-1 mb-0.5 rotate-180 group-hover/link:-translate-x-[0.175rem] group-focus-visible/link:-translate-x-[0.175rem]",
            )}
          />
        )}

        <span
          className={cn(
            "border-b-[1.5px] border-transparent pb-px transition motion-reduce:transition-none",
            underline && "group-hover/link:border-clr",
          )}
        >
          {italic && (
            <span className="text-xs lowercase italic">{italic} </span>
          )}
          {text}
        </span>

        {icon === "out" && (
          <ArrowOutIcon
            className={cn(
              icon_cn,
              "mb-2.5 ml-0.5 group-hover/link:-translate-y-0.5 group-focus-visible/link:-translate-y-0.5",
            )}
          />
        )}

        {icon === "right" && (
          <ArrowRightIcon
            className={cn(
              icon_cn,
              "mb-0.5 ml-1 group-hover/link:translate-x-[0.175rem] group-focus-visible/link:translate-x-[0.175rem]",
            )}
          />
        )}

        {icon === "chevron-right" && (
          <ChevronRightIcon
            className={cn(
              icon_cn,
              "mb-0.5 ml-0.5 group-hover/link:translate-x-[0.175rem] group-focus-visible/link:translate-x-[0.175rem]",
            )}
          />
        )}
      </div>
    </Anchor>
  );
}
