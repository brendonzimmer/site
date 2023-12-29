import { BlockLink } from "@/components/link";
import { notFound } from "next/navigation";
import { projects } from "@/data";

export default function Project({ params }: { params: { id: string } }) {
  const p = projects.find((p) => p.blogID === params.id);
  if (!p) notFound();

  return (
    <main className="mx-auto flex max-w-screen-xl flex-col gap-2 p-6 lg:px-24 lg:pb-12 lg:pt-24">
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
