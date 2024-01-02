import { cn } from "@/utils";

export function Item({
  side,
  title,
  desc,
  tags,
}: {
  title: React.ReactNode;
  side?: React.ReactNode;
  desc?: string;
  tags?: string[];
}) {
  return (
    <div className="text-pretty lg:grid lg:grid-cols-[1fr_7fr]">
      <Item.Side node={side} />

      <div className="flex flex-col gap-2">
        {title}
        <Item.Description text={desc} />
        <Item.Tags list={tags} />
      </div>
    </div>
  );
}

Item.Side = function Side({ node }: { node?: React.ReactNode }) {
  if (!node) return <div />;
  return node;
};

Item.Description = function ({ text }: { text?: string }) {
  if (!text) return null;
  return <p className="text-sm text-auto">{text}</p>;
};

Item.Tags = function ({
  list,
  tagCn,
  pCn,
}: {
  list?: string[];
  tagCn?: string;
  pCn?: string;
}) {
  if (!list?.length) return null;
  return (
    <ul className={cn("flex flex-wrap gap-2", pCn)}>
      {list.map((tag) => (
        <li key={tag}>
          <div
            className={cn(
              "whitespace-nowrap rounded-full bg-clr++/10 px-3 py-1 text-xs leading-5 text-clr+",
              tagCn,
            )}
          >
            {tag}
          </div>
        </li>
      ))}
    </ul>
  );
};
