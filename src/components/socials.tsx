import { GithubIcon, LinkedinIcon } from "@/icons";
import { InlineLink } from "@/components/link";
import { cn } from "@/utils";

export function Socials({ className }: { className?: string }) {
  return (
    <ul className={cn("flex gap-4", className)}>
      <li>
        <InlineLink
          href="https://linkedin.com/in/brendonzimmer"
          ariaLabel="Brendon Zimmer on LinkedIn"
          className="text-muted"
        >
          <LinkedinIcon className="size-6" />
        </InlineLink>
      </li>
      <li>
        <InlineLink
          href="https://github.com/brendonzimmer"
          ariaLabel="Brendon Zimmer on GitHub"
          className="text-muted"
        >
          <GithubIcon className="size-6" />
        </InlineLink>
      </li>
    </ul>
  );
}
