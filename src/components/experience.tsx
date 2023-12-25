import { Description } from "./pure/description";
import { InlineLink } from "./pure/inline_link";
import { LinkArrowUpRightIcon } from "@/icons";
import { type Experience } from "@/data";
import { Skills } from "./skills";
import { cn } from "@/utils";

export function Experience({
  date,
  roles,
  company,
  description,
  skills,
}: Experience) {
  return (
    <div className="grid grid-cols-[1fr_7fr]">
      {/* Date */}
      <Date date={date} />

      <div className="flex flex-col gap-2">
        {/* Roles + Company */}
        <Title roles={roles} company={company} />

        {/* Description */}
        <Description text={description} />

        {/* Skills */}
        <Skills items={skills} />
      </div>
    </div>
  );
}

function Date({ date }: { date: Experience["date"] }) {
  return (
    <div className="mt-1 text-pretty pr-2 text-xs font-semibold uppercase text-clr">
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
        className="group/link items-baseline font-semibold leading-tight"
      >
        {role.role}
        <span className="text-xs italic"> at </span>
        {company.name}
        <LinkArrowUpRightIcon className="ml-0.5 inline-block size-4 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
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
