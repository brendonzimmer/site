import { InlineLink } from "@/components/link";
import { Description } from "./description";
import { type Project } from "@/data";
import { LinkIcon } from "@/icons";
import { Skills } from "./skills";

export function Project({ title, description, skills, links }: Project) {
  return (
    <div className="text-pretty lg:grid lg:grid-cols-[1fr_7fr]">
      {/* Links */}
      <Links items={links} />

      <div className="flex flex-col gap-2">
        {/* Title */}
        <h3 className="items-baseline font-medium leading-tight text-auto+">
          {title}
        </h3>

        {/* Description */}
        <Description text={description} />

        {/* Skills */}
        <Skills items={skills} />
      </div>
    </div>
  );
}

function Links({ items }: { items: Project["links"] }) {
  return (
    <div className="flex gap-2 pb-1 text-xs font-semibold uppercase lg:mt-0.5 lg:flex-col lg:gap-0.5 lg:pb-0 lg:pr-2">
      {items.map(({ name, url }) => (
        <InlineLink key={name} href={url} className="flex gap-1 text-clr">
          <LinkIcon className="size-[1rem]" />
          {name}
        </InlineLink>
      ))}
    </div>
  );
}
