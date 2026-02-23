import { ArrowOutIcon, LinkIcon } from "@/icons";
import type { Project as ProjectType } from "@/data";
import { InlineLink } from "./link";
import { Item } from "./item";
import { cn } from "@/utils";

const statusLabel: Record<ProjectType["status"], string> = {
  live: "Live",
  shipped: "Shipped",
  wip: "WIP",
  archived: "Archive",
};

export function Project(project: ProjectType) {
  const { title, summary, skills, links, status, visibility } = project;

  return (
    <div className="text-pretty lg:grid lg:grid-cols-[1fr_7fr]">
      <Project.Links links={links} title={title} />

      <div className="flex flex-col gap-2">
        <Project.Title as="h3" title={title} />
        <Project.Badges status={status} visibility={visibility} />
        <Project.Summary summary={summary} />
        <Item.Tags list={skills} />
      </div>
    </div>
  );
}

Project.Title = function Title({
  title,
  as: As,
}: {
  title: string;
  as: "h2" | "h3";
}) {
  return <As className="text-base font-semibold leading-snug text-auto+">{title}</As>;
};

Project.Badges = function Badges({
  status,
  visibility,
  className,
}: {
  status: ProjectType["status"];
  visibility: ProjectType["visibility"];
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      <span className="rounded-full bg-clr++/10 px-2 py-0.5 text-xs font-semibold text-clr+">
        {statusLabel[status]}
      </span>
      {visibility === "private" && (
        <span className="rounded-full border border-auto/25 px-2 py-0.5 text-xs font-semibold text-auto-">
          Private
        </span>
      )}
    </div>
  );
};

Project.Summary = function Summary({
  summary,
  className,
}: {
  summary: ProjectType["summary"];
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-1 text-sm text-auto", className)}>
      <p>{summary.what}</p>
      <p>{summary.impact}</p>
      <p>{summary.role}</p>
    </div>
  );
};

Project.Links = function Links({
  links,
  title,
  icon = "link",
  forceColumn = false,
  className,
}: {
  links: ProjectType["links"];
  title: string;
  forceColumn?: boolean;
  icon?: "link" | "arrow-out";
  className?: string;
}) {
  if (!links?.length) return <div />;

  return (
    <div
      className={cn(
        "flex gap-2.5 pb-1 text-xs font-semibold uppercase lg:mt-0.5 lg:flex-col lg:gap-0.5 lg:pb-0 lg:pr-2",
        forceColumn && "flex-col",
      )}
    >
      {links.map(({ name, url }) => (
        <InlineLink
          key={`${name}_${url}`}
          target={url.startsWith("/") ? "_self" : "_blank"}
          href={url}
          className={cn(
            "flex items-center gap-1 text-clr",
            icon === "arrow-out" && "group/link",
            className,
          )}
          ariaLabel={`${name} link for ${title}`}
        >
          {icon === "link" && <LinkIcon />}
          {name}
          {icon === "arrow-out" && (
            <ArrowOutIcon className="inline-block transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-focus-visible/link:-translate-y-0.5 group-focus-visible/link:translate-x-0.5 motion-reduce:transition-none" />
          )}
        </InlineLink>
      ))}
    </div>
  );
};
