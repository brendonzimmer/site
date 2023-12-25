export function Tag({ item }: { item: string }) {
  return (
    <div className="rounded-full bg-clr++/10 px-3 py-1 text-xs leading-5 text-clr+">
      {item}
    </div>
  );
}
