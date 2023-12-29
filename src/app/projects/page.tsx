import { Project } from "@/components/project";
import { BlockLink } from "@/components/link";
import { Tags } from "@/components/item";
import { projects } from "@/data";

export default function Projects() {
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

      <h1 className="text-4xl font-bold tracking-tight text-auto+ sm:text-5xl">
        Project Archive
      </h1>

      <table className="mt-4 text-left">
        <thead className="sticky top-0 z-10 border-b border-auto/20 bg-auto--/75 px-6 py-5 backdrop-blur">
          <tr className="text-sm font-semibold uppercase text-clr *:py-4">
            <th>Year</th>
            <th>Project</th>
            <th className="hidden sm:table-cell">Skills</th>
            <th className="hidden sm:table-cell">Links</th>
          </tr>
        </thead>
        <tbody>
          {Array.from(projects)
            .sort((a, b) => b.year - a.year)
            .map((p) => {
              return (
                <tr
                  key={p.title}
                  className="border-b border-auto/20 text-sm *:py-4 *:pr-4 *:align-top last:border-none"
                >
                  <td className="translate-y-px">{p.year}</td>
                  <td className="flex flex-col gap-1">
                    <Project.Title as="h2" title={p.title} blogID={p.blogID} />
                    <p className="text-pretty">{p.description}</p>
                    <div className="sm:hidden">
                      <Project.Links
                        links={[
                          ...(p.blogID
                            ? [{ name: "Blog", url: `/projects/${p.blogID}` }]
                            : []),
                          ...(p.links ?? []),
                        ]}
                        title={p.title}
                      />
                    </div>
                  </td>
                  <td className="hidden sm:table-cell">
                    {p.skills && <Tags tags={p.skills} />}
                  </td>
                  <td className="hidden sm:table-cell">
                    {p.links?.length && (
                      <Project.Links
                        links={p.links}
                        title={p.title}
                        forceColumn
                        icon="arrow-out"
                        className="text-auto"
                      />
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </main>
  );
}
