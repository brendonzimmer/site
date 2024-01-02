import { Article } from "@/components/article";
import { BlockLink } from "@/components/link";
import { notFound } from "next/navigation";
import { projects } from "@/data";

export default async function Project({ params }: { params: { id: string } }) {
  const p = projects.find((p) => p.id === params.id);
  if (!p) notFound();

  return (
    <div className="mx-auto flex max-w-screen-xl flex-col gap-2 p-6 font-sans lg:px-24 lg:pb-12 lg:pt-24">
      <BlockLink
        text="All Projects"
        href="/projects"
        icon="left"
        className="text-clr"
        underline={false}
      />

      <h1 className="text-4xl font-bold tracking-tight text-auto+ sm:text-5xl">
        {p.title}
      </h1>

      <main>
        <Article id={p.id!} />
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  return projects
    .filter((p) => p.id)
    .map((p) => ({
      id: p.id as string,
    }));
}
