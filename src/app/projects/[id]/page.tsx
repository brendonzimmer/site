import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDX } from "@/components/mdx";
import { projects } from "@/data";

type Props = { params: Promise<{ id: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((project) => project.id === id);
  if (!project) notFound();
  return { title: project.title, description: project.description };
}
export default async function Blog({ params }: Props) {
  const { id } = await params;
  const project = projects.find((project) => project.id === id);
  if (!project) notFound();
  const { mdx, data } = await MDX(id);
  return (
    <main id="main-content" className="site-shell article-page">
      <Link className="text-link" href="/projects">
        ← All projects
      </Link>
      <header className="article-header">
        <p className="eyebrow">{project.year} / Project overview</p>
        <h1>{data.title}</h1>
        <p>By {data.authors.join(", ")}</p>
        <ul className="project-skills" aria-label="Technologies">
          {project.skills?.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </header>
      <article className="article-content">{mdx}</article>
    </main>
  );
}
export function generateStaticParams() {
  return projects
    .filter((project) => project.id)
    .map((project) => ({ id: project.id! }));
}
