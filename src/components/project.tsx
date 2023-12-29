import { ArrowOutIcon, LinkIcon } from "@/icons";
import { BlockLink, InlineLink } from "./link";
import type { Project } from "@/data";
import { Tooltip } from "./tooltip";
import { Item } from "./item";
import { cn } from "@/utils";

export function Project({
  title,
  description,
  skills,
  links,
  blogID,
}: Project) {
  const combolinks = [
    ...(blogID ? [{ name: "Blog", url: `/projects/${blogID}` }] : []),
    ...(links ?? []),
  ];

  return (
    <Item
      side={
        links?.length ? (
          <>
            <div className="sm:hidden">
              <Links links={combolinks} title={title} />
            </div>
            <div className="hidden sm:block">
              {links?.length && (
                <Links links={links} title={title} icon="link" />
              )}
            </div>
          </>
        ) : (
          <div />
        )
      }
      title={<Title as="h3" {...{ title, blogID }} />}
      desc={description}
      tags={skills}
    />
  );
}

function Title({
  title,
  blogID,
  as: As,
}: {
  blogID?: string;
  title: string;
  as: "h2" | "h3";
}) {
  return (
    <As className="font-medium leading-tight text-auto+">
      {blogID && (
        <div className="w-fit text-base font-semibold leading-snug text-auto+">
          <span className="hidden sm:block">
            <Tooltip
              trigger={
                <BlockLink
                  href={`/projects/${blogID}`}
                  ariaLabel={`Blog link for ${title}`}
                  target="_self"
                  text={title}
                  icon="chevron-right"
                  className="text-left"
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
          <span className="sm:hidden">{title}</span>
        </div>
      )}

      {!blogID && (
        <span className="text-base font-semibold leading-snug text-auto+">
          {title}
        </span>
      )}
    </As>
  );
}

function Links({
  links,
  title,
  icon = "link",
  forceColumn = false,
  className,
}: {
  links: NonNullable<Project["links"]>;
  title: string;
  forceColumn?: boolean;
  icon?: "link" | "arrow-out";
  className?: string;
}) {
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
}

Project.Title = Title;
Project.Links = Links;
