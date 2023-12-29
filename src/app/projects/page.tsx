import { Links, Tags } from "@/components/item";
import { Tooltip } from "@/components/tooltip";
import { BlockLink } from "@/components/link";
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

      <h1 className="text-5xl font-bold tracking-tight text-auto+">
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
                    {p.blogID && (
                      <div className="text-base font-semibold leading-snug text-auto+">
                        <h2 className="hidden sm:block">
                          <Tooltip
                            trigger={
                              <BlockLink
                                href={`/projects/${p.blogID}`}
                                ariaLabel={`Blog link for ${p.title}`}
                                target="_self"
                                text={p.title}
                                icon="chevron-right"
                                className="text-left"
                              />
                            }
                            content={
                              <div className="bg-auto--">
                                <p className="whitespace-nowrap rounded bg-clr++/10 px-3 py-1 text-xs leading-5 text-clr+">
                                  <span className="lowercase italic">
                                    goto{" "}
                                  </span>
                                  Blog Post
                                </p>
                              </div>
                            }
                          />
                        </h2>
                        <h2 className="sm:hidden">{p.title}</h2>
                      </div>
                    )}

                    {!p.blogID && (
                      <h2 className="text-base font-semibold leading-snug text-auto+">
                        {p.title}
                      </h2>
                    )}
                    <p className="text-pretty">{p.description}</p>
                    <div className="sm:hidden">
                      <Links
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
                      <Links
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
