import { Tag } from "./pure/tag";
import { cn } from "@/utils";

export function Skills({
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
