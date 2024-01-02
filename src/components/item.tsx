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

Item.Side = ({ node }: { node?: React.ReactNode }) => {
  if (!node) return <div />;
  return node;
};

Item.Description = ({ text }: { text?: string }) => {
  if (!text) return null;
  return <p className="text-sm text-auto">{text}</p>;
};

Item.Tags = ({ list }: { list?: string[] }) => {
  if (!list?.length) return null;
  return (
    <ul className="flex flex-wrap gap-2">
      {list.map((tag) => (
        <li key={tag}>
          <div className="whitespace-nowrap rounded-full bg-clr++/10 px-3 py-1 text-xs leading-5 text-clr+">
            {tag}
          </div>
        </li>
      ))}
    </ul>
  );
};
