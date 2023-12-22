import Image from "next/image";
import { cn } from "@/utils";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-cols-2 p-24 gap-4">
      <header className="sticky top-24 h-min">
        <About />
        <Nav />
      </header>
      <main className="flex flex-col gap-36">
        <Section id="about" className="space-y-4 text-balance">
          <Description />
        </Section>

        <Section id="experience">
          <div>
            <ol className="flex flex-col gap-12">
              <li>
                <Experience
                  date="Jan 2023 — Present"
                  roles={[
                    { role: "Director of Recruitment", current: true },
                    { role: "Engineer & Consultant", current: true },
                  ]}
                  company={{ name: "TroyLabs", url: "https://troylabs.vc" }}
                  skills={["React", "TypeScript", "Node.js", "GraphQL"]}
                  description="TroyLabs is a venture platform at USC, empowering the Trojan community to transform ideas into reality with funding resources, startup guidance, and community involvement."
                />
              </li>
              <li>
                <Experience
                  date="Jan 2023 — Present"
                  roles={[
                    { role: "Director of Recruitment", current: true },
                    { role: "Engineer & Consultant", current: true },
                  ]}
                  company={{ name: "TroyLabs", url: "https://troylabs.vc" }}
                  skills={["React", "TypeScript", "Node.js", "GraphQL"]}
                  description="TroyLabs is a venture platform at USC, empowering the Trojan community to transform ideas into reality with funding resources, startup guidance, and community involvement."
                />
              </li>
              <li>
                <Experience
                  date="Jan 2023 — Present"
                  roles={[
                    { role: "Director of Recruitment", current: true },
                    { role: "Engineer & Consultant", current: true },
                  ]}
                  company={{ name: "TroyLabs", url: "https://troylabs.vc" }}
                  skills={["React", "TypeScript", "Node.js", "GraphQL"]}
                  description="TroyLabs is a venture platform at USC, empowering the Trojan community to transform ideas into reality with funding resources, startup guidance, and community involvement."
                />
              </li>
            </ol>

            <div className="mt-12">
              <Link
                className="inline-flex items-center leading-tight font-semibold text-slate-200 group"
                aria-label="View Full Résumé"
                href="/resume.pdf"
              >
                <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                  View Full Résumé
                </span>
                <span className="whitespace-nowrap">
                  <LinkArrowRightIcon />
                </span>
              </Link>
            </div>
          </div>
        </Section>

        <Section id="projects">
          <ol className="flex flex-col gap-12">
            <li>
              <Project
                title="Factor"
                description="Find the prime factorization of a number!"
                url="https://github.com/brendonzimmer/factor"
                skills={["Rust", "CLI", "Trial Division"]}
              />
            </li>
            <li>
              <Project
                title="Music Garage (v1)"
                description="A music transfer service to transfer your music from Spotify to Apple Music and vice versa. Utilized ISRC codes to make song matching highly accurate and provides custom album cover options."
                url="https://v1.music.brendon.app"
                skills={[
                  "Spotify API",
                  "Apple Music API",
                  "OAuth",
                  "React",
                  "TypeScript",
                  "Next.js",
                  "Tailwind CSS",
                  "Vercel",
                ]}
              />
            </li>
            <li>
              <Project
                title="Factor"
                description="Find the prime factorization of a number!"
                url="https://github.com/brendonzimmer/factor"
                skills={["Rust", "CLI", "Trial Division"]}
              />
            </li>
            <li>
              <Project
                title="Music Garage (v1)"
                description="A music transfer service to transfer your music from Spotify to Apple Music and vice versa. Utilized ISRC codes to make song matching highly accurate and provides custom album cover options."
                url="https://v1.music.brendon.app"
                skills={[
                  "Spotify API",
                  "Apple Music API",
                  "OAuth",
                  "React",
                  "TypeScript",
                  "Next.js",
                  "Tailwind CSS",
                  "Vercel",
                ]}
              />
            </li>
            <li>
              <Project
                title="Factor"
                description="Find the prime factorization of a number!"
                url="https://github.com/brendonzimmer/factor"
                skills={["Rust", "CLI", "Trial Division"]}
              />
            </li>
            <li>
              <Project
                title="Music Garage (v1)"
                description="A music transfer service to transfer your music from Spotify to Apple Music and vice versa. Utilized ISRC codes to make song matching highly accurate and provides custom album cover options."
                url="https://v1.music.brendon.app"
                skills={[
                  "Spotify API",
                  "Apple Music API",
                  "OAuth",
                  "React",
                  "TypeScript",
                  "Next.js",
                  "Tailwind CSS",
                  "Vercel",
                ]}
              />
            </li>
            <li>
              <Project
                title="Music Garage (v1)"
                description="A music transfer service to transfer your music from Spotify to Apple Music and vice versa. Utilized ISRC codes to make song matching highly accurate and provides custom album cover options."
                url="https://v1.music.brendon.app"
                skills={[
                  "Spotify API",
                  "Apple Music API",
                  "OAuth",
                  "React",
                  "TypeScript",
                  "Next.js",
                  "Tailwind CSS",
                  "Vercel",
                ]}
              />
            </li>
          </ol>
        </Section>
      </main>
    </div>
  );
}

function About() {
  return (
    <>
      <h1 className="text-5xl font-bold tracking-tight text-slate-200">
        <Link href={"/"}>Brendon Zimmer</Link>
      </h1>
      <h2 className="pt-3 text-lg font-medium text-slate-200 text-balance">
        Undergraduate Full-Stack Engineer
      </h2>
      <p className="mt-4 max-w-xs text-balance">
        I&apos;m a software engineer in Los Angeles. I&apos;m currently working
        on <a href="https://ofcourse.fyi">ofc.fyi</a>. I&apos;m interested in
        distributed systems, programming languages, and developer tools.
      </p>
    </>
  );
}

function Nav() {
  return (
    <nav className="block">
      <ul className="mt-16 w-max">
        <li>
          <Link className="group flex items-center py-3" href={"#about"}>
            <span className="mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              About
            </span>
          </Link>
        </li>
        <li>
          <Link className="group flex items-center py-3" href={"#experience"}>
            <span className="mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              Experience
            </span>
          </Link>
        </li>
        <li>
          <Link className="group flex items-center py-3" href={"#projects"}>
            <span className="mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              Projects
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function Description() {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ipsam
        provident temporibus esse similique voluptates explicabo ex impedit
        iusto, nostrum exercitationem, enim assumenda modi blanditiis quasi ut.
        Error, dicta doloribus. Officia corrupti esse neque iusto reprehenderit
        non. Placeat ab, numquam aut sapiente corporis omnis similique
        aspernatur commodi est aliquid illo minima. Quia deserunt corrupti quo
        amet earum cupiditate repellat ipsam.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        quas nihil illo ipsam, odit maiores, eaque explicabo unde reprehenderit
        omnis autem eius. Pariatur natus illum praesentium molestias possimus
        neque vitae.
      </p>
    </>
  );
}

function Experience({
  date,
  roles,
  company,
  description,
  links,
  skills,
}: {
  date: string;
  roles: [
    { role: string; current: boolean },
    ...{ role: string; current: boolean }[]
  ];
  company: { name: string; url: string };
  description?: string;
  links?: { name: string; url: string }[];
  skills?: string[];
}) {
  const [curr_role, ...rest_roles] = roles;

  return (
    <div className="group grid grid-cols-[1fr_4fr]">
      {/* Date */}
      <div className="mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 text-balance">
        {date}
      </div>

      <div>
        {/* Roles + Company */}
        <h3>
          <Link
            href={company.url}
            className="font-medium group/link items-baseline leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
          >
            {curr_role.role} · {company.name}
            <LinkArrowUpRightIcon />
          </Link>
          {rest_roles.map(({ role, current }) => (
            <div
              key={role}
              className={cn(
                "text-slate-500"
                // current && "text-slate-200 font-medium leading-tight"
              )}
            >
              {role}
            </div>
          ))}
        </h3>

        {/* Description */}
        {description && <p className="mt-2 text-sm">{description}</p>}

        {/* Links */}
        {links && (
          <ul className="mt-2 flex flex-wrap">
            {links.map(({ name, url }) => (
              <li key={url} className="mr-1.5 mt-2">
                <Link href={url}>{name}</Link>
              </li>
            ))}
          </ul>
        )}

        {/* Skills */}
        {skills && (
          <ul className="mt-2 flex flex-wrap">
            {skills.map(tag => (
              <li key={tag} className="mr-1.5 mt-2">
                <Tag item={tag} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function Project({
  img,
  title,
  url,
  description,
  skills,
}: {
  img?: { url: string; alt: string };
  title: string;
  url: string;
  description: string;
  skills?: string[];
}) {
  return (
    <div className={cn("group", img && "grid grid-cols-[1fr_4fr]")}>
      {/* Thumbnail */}
      {img && <Image src={img.url} alt={img.alt} />}

      <div>
        {/* Title */}
        <h3>
          <Link
            href={url}
            className="font-medium group/link items-baseline leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
          >
            {title}
            <LinkArrowUpRightIcon />
          </Link>
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm">{description}</p>

        {/* Skills */}
        {skills && (
          <ul className="mt-2 flex flex-wrap">
            {skills.map(tag => (
              <li key={tag} className="mr-1.5 mt-2">
                <Tag item={tag} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function Tag({ item }: { item: string }) {
  return (
    <div className="rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 text-teal-300">
      {item}
    </div>
  );
}

function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24", className)}>
      {children}
    </section>
  );
}

function LinkArrowUpRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

function LinkArrowRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
