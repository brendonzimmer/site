import { type Project } from "@/data";
import { InlineLink } from "./link";
import { LinkIcon } from "@/icons";
import { Item } from "./item";

export function Project({ title, description, skills, links }: Project) {
  return (
    <Item
      side={<Links items={links} />}
      title={
        <h3 className="items-baseline font-medium leading-tight text-auto+">
          {title}
        </h3>
      }
      desc={description}
      tags={skills}
    />
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
