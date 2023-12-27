import { GithubIcon, LinkedinIcon } from "@/icons";
import { InlineLink } from "@/components/link";
import { cn } from "@/utils";

export function SocialList({ className }: { className?: string }) {
  return (
    <ul className={cn("flex gap-4", className)}>
      <li>
        <InlineLink
          href="https://linkedin.com/in/brendonzimmer"
          className="text-auto-"
        >
          <LinkedinIcon className="size-6" />
        </InlineLink>
      </li>
      <li>
        <InlineLink
          href="https://github.com/brendonzimmer"
          className="text-auto-"
        >
          <GithubIcon className="size-6" />
        </InlineLink>
      </li>
    </ul>
  );
}
