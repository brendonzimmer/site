import { Divider } from "./divider";

export const Section = {
  Simple,
  Items,
};

function Simple({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <Divider as="h2" text={name} className="py-4" sticky />
      <div className="flex flex-col gap-4 pt-4">{children}</div>
    </section>
  );
}

function Items({
  name,
  items,
  link,
}: {
  name: string;
  items: React.ReactNode[];
  link: React.ReactNode;
}) {
  return (
    <section>
      <Divider as="h2" text={name} className="py-4" sticky />
      <div className="flex flex-col gap-8 pt-4 lg:gap-12">
        <ol className="flex flex-col gap-8 lg:gap-12">{items}</ol>
        {link}
      </div>
    </section>
  );
}
