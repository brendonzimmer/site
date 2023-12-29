import type { Experience } from "@/data";
import { ArrowOutIcon } from "@/icons";
import { InlineLink } from "./link";
import { Item } from "./item";
import { cn } from "@/utils";

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
        <div className="text-balance text-xs font-semibold uppercase text-clr lg:mt-1 lg:pr-2">
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
        className="group/link font-medium leading-tight"
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
            "font-medium text-auto-",
            current && "leading-tight text-auto+",
          )}
        >
          {role}
        </div>
      ))}
    </h3>
  );
}

Experience.Title = Title;
