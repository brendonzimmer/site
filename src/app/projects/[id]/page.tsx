import { notFound } from "next/navigation";
import { projects } from "@/data";
import { BlockLink, InlineLink } from "@/components/link";

export default function Project({ params }: { params: { id: string } }) {
  const p = projects.find((p) => p.blogID === params.id);
  if (!p) notFound();

  return (
    <main className="mx-auto flex max-w-screen-xl flex-col gap-2 p-6 lg:px-24 lg:pb-12 lg:pt-24">
      <BlockLink
        text="Brendon Zimmer"
        href="/"
        icon="left"
        className="text-clr"
        underline={false}
        ariaLabel="Homepage"
      />

      <h1 className="text-5xl font-bold tracking-tight text-auto+">
        {p.title}
      </h1>

      <div className="mt-4 text-left">
        <p className="text-sm font-semibold uppercase text-clr *:py-4">
          {p.year}
        </p>
        <p className="text-sm font-semibold uppercase text-clr *:py-4">
          {p.skills?.join(", ")}
        </p>
        <p className="text-sm font-semibold uppercase text-clr *:py-4">
          {p.links?.map(({ name, url }) => (
            <BlockLink
              key={name}
              href={url}
              text={name}
              icon="out"
              underline={false}
              className="text-left"
            />
          ))}
        </p>
      </div>

      <div className="mt-4 text-left">
        <p className="text-sm font-semibold uppercase text-clr *:py-4">
          {p.description}
        </p>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return projects
    .filter((p) => p.blogID)
    .map((p) => ({
      id: p.blogID as string,
    }));
}
