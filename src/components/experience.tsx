import { type Experience } from "@/data";
import { ArrowOutIcon } from "@/icons";
import { InlineLink } from "./link";
import { cn } from "@/utils";
import { Item } from "./item";

export function Experience({
  date,
  roles,
  company,
  description,
  skills,
}: Experience) {
  return (
    <Item
      side={<Date date={date} />}
      title={<Title roles={roles} company={company} />}
      desc={description}
      tags={skills}
    />
  );
}

function Date({ date, className }: { date: string; className?: string }) {
  return (
    <div
      className={cn(
        "text-xs font-semibold uppercase text-clr lg:mt-1 lg:pr-2",
        className,
      )}
    >
      {date}
    </div>
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
