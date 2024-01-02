import { ArrowOutIcon, LinkIcon } from "@/icons";
import { BlockLink, InlineLink } from "./link";
import type { Project } from "@/data";
import { Tooltip } from "./tooltip";
import { If, cn } from "@/utils";
import { Item } from "./item";

export function Project({ title, description, skills, links, id }: Project) {
  return (
    <Item
      side={<Project.Links {...{ links, title }} />}
      title={<Project.Title as="h3" {...{ title, id }} />}
      desc={description}
      tags={skills}
    />
  );
}

Project.Title = ({
  title,
  id,
  as: As,
}: {
  id?: string;
  title: string;
  as: "h2" | "h3";
}) => {
  const link = (
    <div className="w-fit">
      <span>
        <Tooltip
          trigger={
            <BlockLink
              href={`/projects/${id}`}
              ariaLabel={`Blog link for ${title}`}
              target="_self"
              text={title}
              icon="chevron-right"
              underline={false}
              className="hover:text-clr focus-visible:text-clr"
            />
          }
          content={
            <div className="bg-auto--">
              <p className="whitespace-nowrap rounded bg-clr++/10 px-3 py-1 text-xs leading-5 text-clr+ ring-4 ring-auto--">
                <span className="lowercase italic">goto </span>
                Blog Post
              </p>
            </div>
          }
        />
      </span>
      {/* <span className="sm:hidden">{title}</span> */}
    </div>
  );

  return (
    <As className="text-base font-semibold leading-snug text-auto+">
      <If this={!!id} then={link} else={title} />
    </As>
  );
};

Project.Links = ({
  links,
  title,
  icon = "link",
  forceColumn = false,
  className,
}: {
  links: Project["links"];
  title: string;
  forceColumn?: boolean;
  icon?: "link" | "arrow-out";
  className?: string;
}) => {
  if (!links?.length) return null;
  return (
    <div
      className={cn(
        "flex gap-2.5 pb-1 text-xs font-semibold uppercase lg:mt-0.5 lg:flex-col lg:gap-0.5 lg:pb-0 lg:pr-2",
        forceColumn && "flex-col",
      )}
    >
      {links.map(({ name, url }) => (
        <InlineLink
          key={name}
          target={name === "Blog" ? "_self" : "_blank"}
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
