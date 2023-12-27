import { cn } from "@/utils";

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
    <div className="lg:grid lg:grid-cols-[1fr_7fr]">
      {side}

      <div className="flex flex-col gap-2">
        {title}
        <Description text={desc} />
        <Tags items={tags} />
      </div>
    </div>
  );
}

function Description({ text }: { text?: string }) {
  return text?.length ? <p className="text-sm text-auto">{text}</p> : null;
}

export function Tags({
  items,
  className,
}: {
  items?: string[];
  className?: string;
}) {
  return items?.length ? (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {items.map((tag) => (
        <li key={tag}>
          <Tag item={tag} />
        </li>
      ))}
    </ul>
  ) : null;
}

export function Tag({ item }: { item: string }) {
  return (
    <div className="rounded-full bg-clr++/10 px-3 py-1 text-xs leading-5 text-clr+">
      {item}
    </div>
  );
}
