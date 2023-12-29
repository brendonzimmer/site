import { BlockLink } from "@/components/link";
import { Tags } from "@/components/item";
import { projects } from "@/data";

export default function Projects() {
  return (
    <div className="mx-auto flex max-w-screen-xl flex-col gap-2 p-6 lg:px-24 lg:pb-12 lg:pt-24">
      <BlockLink
        text="Brendon Zimmer"
        href="/"
        icon="left"
        className="text-clr"
        underline={false}
      />

      <h1 className="text-5xl font-bold tracking-tight text-auto+">
        Project Archive
      </h1>

      <table className="mt-4 text-left">
        <thead className="sticky top-0 z-10 border-b border-clr/20 bg-auto--/75 px-6 py-5 backdrop-blur">
          <tr className="text-sm font-semibold text-clr *:pb-4">
            <th className="xs:hidden sm:table-cell">Year</th>
            <th>Project</th>
            <th className="xs:table-cell hidden"></th>
            <th className="hidden sm:table-cell">Skills</th>
            <th>Links</th>
          </tr>
        </thead>
        <tbody>
          {Array.from(projects)
            .sort((a, b) => b.year - a.year)
            .map((p) => (
              <tr
                key={p.title}
                className="border-b border-clr/20 align-top text-sm *:py-4 *:pr-4 last:border-none"
              >
                <td className="xs:hidden sm:table-cell">{p.year}</td>
                <td className="font-semibold leading-snug text-auto+">
                  {p.title}
                  {p.blogID && (
                    <BlockLink
                      text="Blog"
                      href={`/blog/${p.blogID}`}
                      underline={false}
                      icon="right"
                      className="xs:block hidden pt-2 text-xs font-medium uppercase text-clr"
                    />
                  )}
                </td>
                <td className="xs:table-cell hidden">{p.description}</td>
                <td className="hidden sm:table-cell">
                  {p.skills && <Tags tags={p.skills} />}
                </td>
                <td>
                  {p.blogID && (
                    <BlockLink
                      text="Blog"
                      href={`/blog/${p.blogID}`}
                      underline={false}
                      className="xs:hidden block whitespace-nowrap font-medium uppercase leading-tight tracking-tight text-auto hover:text-clr focus-visible:text-clr"
                    />
                  )}
                  {p.links?.map(({ name, url }) => (
                    <BlockLink
                      text={name}
                      target="_blank"
                      key={name}
                      href={url}
                      underline={false}
                      className="group/link flex w-fit items-center font-medium uppercase leading-tight tracking-tight text-auto hover:text-clr focus-visible:text-clr"
                    />
                  ))}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
