import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data";

export const metadata: Metadata = {
  title: "Project archive",
  description:
    "Software experiments, useful tools, and creative projects by Brendon Zimmer.",
};
export default function Projects() {
  return (
    <main id="main-content" className="site-shell archive-page">
      <Link className="text-link" href="/">
        ← Brendon Zimmer
      </Link>
      <div className="archive-heading">
        <p className="eyebrow">A collection of things made</p>
        <h1>
          Project archive<span>.</span>
        </h1>
        <p>
          Practical tools, systems experiments, and the occasional detour into
          art.
        </p>
      </div>
      <ol className="archive-list">
        {[...projects]
          .sort((a, b) => b.year - a.year)
          .map((project) => (
            <li key={project.title}>
              <p className="project-year">{project.year}</p>
              <div>
                <h2>
                  {project.id ? (
                    <Link href={`/projects/${project.id}`}>
                      {project.title} ↗
                    </Link>
                  ) : (
                    project.title
                  )}
                </h2>
                <p className="project-description">{project.description}</p>
                <ul
                  className="project-skills"
                  aria-label={`${project.title} technologies`}
                >
                  {project.skills?.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
                <div className="project-actions">
                  {project.id && (
                    <Link
                      className="text-link"
                      href={`/projects/${project.id}`}
                    >
                      Project overview ↗
                    </Link>
                  )}
                  {project.links
                    ?.filter((link) => link.url.trim())
                    .map((link) => (
                      <a
                        className="text-link"
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={link.name}
                        aria-label={`${link.name === "Site" ? "Visit site" : "View code"} for ${project.title} (opens in a new tab)`}
                      >
                        {link.name === "Site" ? "Visit site" : "View code"} ↗
                      </a>
                    ))}
                </div>
              </div>
            </li>
          ))}
      </ol>
      <Link className="text-link" href="/">
        ← Back home
      </Link>
    </main>
  );
}
