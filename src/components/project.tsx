import { ArrowOutIcon } from "@/icons";
import type { Project as ProjectType } from "@/data";
import { InlineLink } from "./link";
import { cn } from "@/utils";

const statusLabel: Record<ProjectType["status"], string> = {
  active: "Active",
  backlog: "Backlog",
  archive: "Archive",
};

export function Project(project: ProjectType) {
  const { title, year, description, skills, links, status, visibility } =
    project;

  return (
    <div className="flex flex-col gap-2 text-pretty">
      <Project.TitleRow
        as="h3"
        title={title}
        links={links}
        year={year}
        status={status}
        visibility={visibility}
      />
      <Project.Description description={description} />
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
  return (
    <As className="text-base font-semibold leading-snug text-auto+">
      {title}
    </As>
  );
};

Project.TitleRow = function TitleRow({
  title,
  links,
  year,
  status,
  visibility,
  as: As,
}: {
  title: string;
  links?: ProjectType["links"];
  year?: number;
  status?: ProjectType["status"];
  visibility?: ProjectType["visibility"];
  as: "h2" | "h3";
}) {
  return (
    <div className="flex flex-wrap items-baseline gap-1.5">
      <As className="mr-0.5 text-base font-semibold leading-snug text-auto+">
        {title}
      </As>
      {year && (
        <span className="rounded bg-clr++/10 px-1.5 py-0.5 text-xs font-semibold text-clr+">
          {year}
        </span>
      )}
      {status && (
        <span className="rounded bg-clr++/10 px-1.5 py-0.5 text-xs font-semibold text-clr+">
          {statusLabel[status]}
        </span>
      )}
      {visibility === "private" && (
        <span className="rounded border border-auto/25 px-1.5 py-0.5 text-xs font-semibold text-auto-">
          Private
        </span>
      )}
      {links?.map(({ name, url }) => (
        <InlineLink
          key={`${name}_${url}`}
          href={url}
          target={url.startsWith("/") ? "_self" : "_blank"}
          className="group/link rounded bg-clr++/10 px-1.5 py-0.5 text-xs font-semibold text-clr+"
          ariaLabel={`${name} link for ${title}`}
        >
          {name}
          <ArrowOutIcon className="mb-px ml-0.5 inline-block size-2.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-focus-visible/link:-translate-y-0.5 group-focus-visible/link:translate-x-0.5 motion-reduce:transition-none" />
        </InlineLink>
      ))}
    </div>
  );
};

Project.Description = function Description({
  description,
  className,
}: {
  description: string;
  className?: string;
}) {
  return <p className={cn("text-sm text-auto", className)}>{description}</p>;
};
