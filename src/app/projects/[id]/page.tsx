import { Separator } from "@/components/separator";
import { BlockLink } from "@/components/link";
import { Project } from "@/components/project";
import { notFound } from "next/navigation";
import { Item } from "@/components/item";
import { MDX } from "@/components/mdx";
import { projects } from "@/data";

export default async function Blog({ params }: { params: { id: string } }) {
  const p = projects.find((p) => p.id === params.id);
  if (!p) notFound();

  const { mdx, data } = await MDX(p.id!);
  return (
    <div className="mx-auto flex max-w-[680px] flex-col gap-2 p-6 lg:pb-12 lg:pt-24">
      <BlockLink
        text="All Projects"
        href="/projects"
        icon="left"
        className=" text-clr "
        underline={false}
      />

      <div className="flex flex-col ">
        <h1 className="pb-1 text-4xl font-bold tracking-tight text-auto+ sm:text-5xl">
          {data.title}
        </h1>
        <h2 className="text-xl font-medium text-auto+">
          <span className="text-lg italic">about</span> {p.title}
        </h2>
        <address className="pb-2 text-xl font-medium not-italic">
          <span className="text-lg italic">by</span> {data.authors.join(", ")}
        </address>
        <div
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          className="-mx-6 flex items-center justify-start gap-2 overflow-x-scroll px-6 [&::-webkit-scrollbar]:hidden"
        >
          <Project.Links
            links={p.links}
            icon="arrow-out"
            title={p.title}
            className="pt-1 lg:h-5 lg:pb-1.5"
          />
          <Item.Tags
            list={p.skills}
            pCn="flex-nowrap"
            tagCn="rounded py-0 px-1"
          />
        </div>
      </div>

      <main className="font-sans text-[calc(1.1875rem)]">
        <article className="pros flex flex-col gap-2">{mdx}</article>
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
