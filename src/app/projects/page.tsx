import { Project } from "@/components/project";
import { BlockLink } from "@/components/link";
import { Item } from "@/components/item";
import { projects } from "@/data";

export default function ProjectsPage() {
  const currentProjects = projects
    .filter((project) => project.group === "current")
    .sort((a, b) => b.year - a.year);

  const archiveProjects = projects
    .filter((project) => project.group === "archive")
    .sort((a, b) => b.year - a.year);

  return (
    <div className="mx-auto flex max-w-screen-xl flex-col gap-2 p-6 lg:px-24 lg:pb-12 lg:pt-24">
      <BlockLink
        text="Brendon Zimmer"
        href="/"
        icon="left"
        className="text-clr"
        underline={false}
        ariaLabel="Homepage"
      />

      <h1 className="text-4xl font-bold tracking-tight text-auto+ sm:text-5xl">
        Projects
      </h1>

      <main className="mt-4 flex flex-col gap-12">
        <ProjectsTable title="Current Projects" rows={currentProjects} />
        <ProjectsTable title="Archive" rows={archiveProjects} />
      </main>
    </div>
  );
}

function ProjectsTable({
  title,
  rows,
}: {
  title: string;
  rows: typeof projects;
}) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-xl font-semibold text-auto+">{title}</h2>

      <table className="text-left">
        <thead className="border-b border-auto/20 bg-auto--/75 px-6 py-5 backdrop-blur">
          <tr className="text-sm font-semibold uppercase text-clr *:py-4">
            <th>Year</th>
            <th>Project</th>
            <th className="hidden sm:table-cell">Status</th>
            <th className="hidden sm:table-cell">Skills</th>
            <th className="hidden sm:table-cell">Links</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((project) => (
            <tr
              key={`${project.title}_${project.year}`}
              className="border-b border-auto/20 text-sm *:py-4 *:pr-4 *:align-top last:border-none"
            >
              <td className="translate-y-px">{project.year}</td>
              <td className="flex flex-col gap-2">
                <Project.Title as="h2" title={project.title} />
                <Project.Summary summary={project.summary} className="text-sm" />
                <Project.Badges
                  status={project.status}
                  visibility={project.visibility}
                  className="sm:hidden"
                />
              </td>
              <td className="hidden sm:table-cell">
                <Project.Badges
                  status={project.status}
                  visibility={project.visibility}
                />
              </td>
              <td className="hidden sm:table-cell">
                <Item.Tags list={project.skills} />
              </td>
              <td className="hidden sm:table-cell">
                <Project.Links
                  links={project.links}
                  title={project.title}
                  forceColumn
                  icon="arrow-out"
                  className="text-auto"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
