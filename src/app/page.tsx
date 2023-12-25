import { Divider, Separator } from "@/components/pure/separator";
import { description, experiences, projects } from "@/data";
import { InlineLink } from "@/components/pure/inline_link";
import { Experience } from "@/components/experience";
import { SocialList } from "@/components/socials";
import { Project } from "@/components/project";
import { LinkArrowRightIcon } from "@/icons";
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
        <Section id="about">
          <div className="flex flex-col gap-4">
            {description.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Section>

        <Divider text="Experience" />

        {/* Experience */}
        <Section id="experience">
          <div className="flex flex-col gap-6 lg:gap-12">
            <ol className="flex flex-col gap-6 lg:gap-12">
              {experiences.map((experience) => (
                <li key={`${experience.company.name}_${experience.date}`}>
                  <Experience {...experience} />
                </li>
              ))}
            </ol>

            {/* Resume */}
            <Button text="View Resume" href="/resume.pdf" target="_blank" />
          </div>
        </Section>

        <Divider text="Projects" />

        {/* Projects */}
        <Section id="projects">
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
            <Button text="More Projects" href="/projects" />
          </div>
        </Section>

        <Separator />

        {/*  Footer */}
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

function Section({
  id,
  children,
  className,
}: {
  id: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn(className)}>
      {children}
    </section>
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
}: {
  text: string;
  href: string;
  target?: React.HTMLAttributeAnchorTarget;
}) {
  return (
    <div className="flex flex-col gap-1">
      <Link
        className="group/link inline-flex items-center font-semibold leading-tight text-auto+"
        aria-label={text}
        href={href}
        target={target}
      >
        <span className="border-b border-transparent pb-px transition group-hover/link:border-clr motion-reduce:transition-none">
          {text}
        </span>
        <span className="whitespace-nowrap">
          <LinkArrowRightIcon className="ml-1 -translate-y-px transition-transform group-hover/link:translate-x-2 group-focus-visible/link:translate-x-2 motion-reduce:transition-none" />
        </span>
      </Link>
    </div>
  );
}
