import { InlineLink } from "@/components/link";
import { Description } from "./description";
import { type Experience } from "@/data";
import { ArrowOutIcon } from "@/icons";
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
    <div className="lg:grid lg:grid-cols-[1fr_7fr]">
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

function Date({
  date,
  className,
}: {
  date: Experience["date"];
  className?: string;
}) {
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
