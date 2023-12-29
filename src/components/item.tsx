export function Item({
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

        {desc && <p className="text-sm text-auto">{desc}</p>}

        {tags?.length && <Tags tags={tags} />}
      </div>
    </div>
  );
}

export function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li key={tag}>
          <div className="whitespace-nowrap rounded-full bg-clr++/10 px-3 py-1 text-xs leading-5 text-clr+">
            {tag}
          </div>
        </li>
      ))}
    </ul>
  );
}
