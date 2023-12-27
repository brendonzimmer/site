import type { Experience, Project } from "@/data";
import { ArrowOutIcon, LinkIcon } from "@/icons";
import { InlineLink } from "./link";
import { cn } from "@/utils";

function Item({
  side,
  title,
  desc,
  tags,
}: {
  side: React.ReactNode;
  title: React.ReactNode;
  desc?: string;
  tags?: string[];
}) {
  return (
    <div className="text-pretty lg:grid lg:grid-cols-[1fr_7fr]">
      {side}

      <div className="flex flex-col gap-2">
        {title}

        {desc?.length && <p className="text-sm text-auto">{desc}</p>}

        {tags?.length && (
          <ul className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li key={tag}>
                <div className="rounded-full bg-clr++/10 px-3 py-1 text-xs leading-5 text-clr+">
                  {tag}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export function Experience({
  date,
  roles,
  company,
  description,
  skills,
}: Experience) {
  return (
    <Item
      side={
        <div className="text-xs font-semibold uppercase text-clr lg:mt-1 lg:pr-2">
          {date}
        </div>
      }
      title={<Title roles={roles} company={company} />}
      desc={description}
      tags={skills}
    />
  );
}

function Title({
  roles: [role, ...roles],
  company,
}: {
  roles: Experience["roles"];
  company: Experience["company"];
}) {
  return (
    <h3>
      <InlineLink
        href={company.url}
        className="group/link font-semibold leading-tight"
      >
        {role.role}
        <span className="text-xs italic"> at </span>
        {company.name}
        <ArrowOutIcon className="mb-2.5 ml-0.5 inline-block size-3 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-focus-visible/link:-translate-y-0.5 group-focus-visible/link:translate-x-0.5 motion-reduce:transition-none" />
      </InlineLink>
      {roles.map(({ role, current }) => (
        <div
          key={role}
          className={cn(
            "text-auto-",
            current && "font-semibold leading-tight text-auto+",
          )}
        >
          {role}
        </div>
      ))}
    </h3>
  );
}

export function Project({ title, description, skills, links }: Project) {
  return (
    <Item
      side={<Links items={links} />}
      title={<h3 className="font-medium leading-tight text-auto+">{title}</h3>}
      desc={description}
      tags={skills}
    />
  );
}

function Links({ items }: { items: Project["links"] }) {
  return (
    <div className="flex gap-2 pb-1 text-xs font-semibold uppercase lg:mt-0.5 lg:flex-col lg:gap-0.5 lg:pb-0 lg:pr-2">
      {items.map(({ name, url }) => (
        <InlineLink
          key={name}
          href={url}
          className="flex items-center gap-1 text-clr"
        >
          <LinkIcon className="size-4" />
          {name}
        </InlineLink>
      ))}
    </div>
  );
}
