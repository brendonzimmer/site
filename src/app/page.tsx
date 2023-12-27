import { description, experiences, projects } from "@/data";
import { ArrowRightIcon, ArrowOutIcon } from "@/icons";
import { Experience } from "./_components/experience";
import { Separator } from "../components/separator";
import { SocialList } from "./_components/socials";
import { InlineLink } from "../components/link";
import { Project } from "./_components/project";
import { Divider } from "@/components/divider";
import Link from "next/link";
import { cn } from "@/utils";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-xl p-6 lg:grid lg:grid-cols-[2fr_3fr] lg:gap-4 lg:px-24 lg:pb-12 lg:pt-24">
      <header className="h-min lg:sticky lg:top-24">
        {/* Me */}
        <Me />

        {/* Social Links */}
        <SocialList className="py-4" />
      </header>

      <main className="flex flex-col gap-8 pt-4 lg:gap-8">
        <Divider text="About" />

        {/* Description */}
        <section>
          <div className="flex flex-col gap-4">
            {description.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>

        <Divider text="Experience" />

        {/* Experience */}
        <section>
          <div className="flex flex-col gap-6 lg:gap-12">
            <ol className="flex flex-col gap-6 lg:gap-12">
              {experiences.map((experience) => (
                <li key={`${experience.company.name}_${experience.date}`}>
                  <Experience {...experience} />
                </li>
              ))}
            </ol>

            {/* Resume */}
            <Button
              italic="view"
              text="Resume"
              href="/resume.pdf"
              target="_blank"
            />
          </div>
        </section>

        <Divider text="Projects" />

        {/* Projects */}
        <section>
          <div className="flex flex-col gap-6 lg:gap-12">
            <ol className="flex flex-col gap-6 lg:gap-12">
              {projects
                .filter((p) => p.feature)
                .map((project) => (
                  <li key={`${project.title}_${project.links[0].url}`}>
                    <Project {...project} />
                  </li>
                ))}
            </ol>

            {/* Project Archive */}
            <Button italic="view" text="Project Archive" href="/projects" />
          </div>
        </section>

        <Separator />

        {/* Footer */}
        <footer className="flex flex-col gap-4">
          <h3>
            Coded in Visual Studio Code. Built with Next.js and Tailwind CSS.
            Deployed with Vercel. Inspired by{" "}
            <InlineLink href="https://brittanychiang.com/">
              Brittany Chiang
            </InlineLink>
            .
          </h3>
        </footer>
      </main>
    </div>
  );
}

function Me() {
  return (
    <>
      <h1 className="text-5xl font-bold tracking-tight text-auto+">
        <Link href={"/"}>Brendon Zimmer</Link>
      </h1>
      <h2 className="pt-3 text-lg font-medium text-auto+">
        Undergraduate Full-Stack Engineer
      </h2>
      <p className="mt-4 lg:max-w-xs">
        I&apos;m a software engineer in Los Angeles. I&apos;m currently working
        on <InlineLink href="https://ofcourse.fyi">ofc.fyi</InlineLink>.
        I&apos;m interested in distributed systems, programming languages, and
        developer tools.
      </p>
    </>
  );
}

function Button({
  text,
  href,
  target,
  italic,
}: {
  text: string;
  italic?: string;
  href: string;
  target?: React.HTMLAttributeAnchorTarget;
}) {
  const icon_cn =
    "inline-block size-3 transition-colors group-hover/link:text-clr group-focus-visible/link:text-clr motion-reduce:transition-none";
  return (
    <Link
      className="group/link w-fit font-semibold leading-tight text-auto+"
      href={href}
      target={target}
      prefetch={target !== "_blank"}
    >
      {italic && (
        <span className="text-xs lowercase italic transition-colors group-hover/link:text-clr group-focus-visible/link:text-clr">
          {italic}{" "}
        </span>
      )}
      <span className="border-b-[1.5px] border-transparent pb-px transition group-hover/link:border-clr motion-reduce:transition-none">
        {text}
      </span>

      <span className="whitespace-nowrap">
        {target === "_blank" ? (
          <ArrowOutIcon className={cn(icon_cn, "mb-2.5 ml-0.5")} />
        ) : (
          <ArrowRightIcon className={cn(icon_cn, "mb-0.5 ml-1")} />
        )}
      </span>
    </Link>
  );
}
