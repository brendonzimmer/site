import Image from "next/image";
import { cn } from "@/utils";
import Link from "next/link";
import {
  description,
  type Experience,
  experiences,
  type Project,
  projects,
} from "@/data";
import { GithubIcon, LinkIcon, LinkedinIcon } from "@/icons";

export default function Home() {
  return (
    <div className="mx-auto grid max-w-screen-xl grid-cols-[2fr_3fr] gap-4 px-24 pb-12 pt-24">
      <header className="sticky top-24 h-min">
        {/* Info */}
        <h1 className="text-5xl font-bold tracking-tight text-auto+">
          <Link href={"/"}>Brendon Zimmer</Link>
        </h1>
        <h2 className="pt-3 text-lg font-medium text-auto+">
          Undergraduate Full-Stack Engineer
        </h2>
        <p className="mt-4 max-w-xs">
          I&apos;m a software engineer in Los Angeles. I&apos;m currently
          working on{" "}
          <InlineLink href="https://ofcourse.fyi">ofc.fyi</InlineLink>. I&apos;m
          interested in distributed systems, programming languages, and
          developer tools.
        </p>

        {/* Social Links */}
        <ul className="flex gap-4 py-4">
          <li>
            <InlineLink
              href="https://linkedin.com/in/brendonzimmer"
              className="text-auto-"
            >
              <LinkedinIcon className="size-6" />
            </InlineLink>
          </li>
          <li>
            <InlineLink
              href="https://github.com/brendonzimmer"
              className="text-auto-"
            >
              <GithubIcon className="size-6" />
            </InlineLink>
          </li>
        </ul>
      </header>

      <main className="flex flex-col gap-8 pt-4">
        <SeparatorWith text="About" />

        {/* Description */}
        <Section id="about">
          <div className="flex flex-col gap-4">
            {description.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Section>

        <SeparatorWith text="Experience" />

        {/* Experience */}
        <Section id="experience">
          <div className="flex flex-col gap-12">
            <ol className="flex flex-col gap-12">
              {experiences.map((experience) => (
                <li key={`${experience.company.name}_${experience.date}`}>
                  <Experience {...experience} />
                </li>
              ))}
            </ol>

            {/* Resume */}
            <div className="flex flex-col gap-1">
              <Link
                className="group/link inline-flex items-center font-semibold leading-tight text-auto+"
                aria-label="View Resume"
                href="/resume.pdf"
                target="_blank"
              >
                <span className="border-b border-transparent pb-px transition group-hover/link:border-clr motion-reduce:transition-none">
                  View Resume
                </span>
                <span className="whitespace-nowrap">
                  <LinkArrowRightIcon />
                </span>
              </Link>
            </div>
          </div>
        </Section>

        <SeparatorWith text="Projects" />

        {/* Projects */}
        <Section id="projects">
          <ol className="flex flex-col gap-12">
            {projects.map((project) => (
              <li key={`${project.title}_${project.links[0].url}`}>
                <Project {...project} />
              </li>
            ))}
          </ol>
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

function InlineLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className={cn(
        "font-semibold text-auto+ transition-colors duration-150 ease-linear hover:text-clr focus-visible:text-clr",
        className,
      )}
    >
      {children}
    </Link>
  );
}

function Experience({
  date,
  roles: [role, ...roles],
  company,
  description,
  skills,
}: Experience) {
  return (
    <div className="grid grid-cols-[1fr_7fr]">
      {/* Date */}
      <div className="mt-1 text-pretty pr-2 text-xs font-semibold uppercase text-clr">
        {date}
      </div>

      <div>
        {/* Roles + Company */}
        <h3>
          <InlineLink
            href={company.url}
            className="group/link items-baseline font-semibold leading-tight"
          >
            {role.role}
            <span className="text-xs italic"> at </span>
            {company.name}
            <LinkArrowUpRightIcon className="ml-0.5 inline-block" />
          </InlineLink>
          {roles.map(({ role, current }) => (
            <div
              key={role}
              className={cn(
                "text-auto-",
                current && "font-semibold leading-tight text-auto+",
              )}
            >
              {role}
            </div>
          ))}
        </h3>

        {/* Description */}
        {description && <p className="mt-2 text-sm text-auto">{description}</p>}

        {/* Skills */}
        {skills && (
          <ul className="mt-2 flex flex-wrap">
            {skills.map((tag) => (
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

function Project({ title, description, skills, links }: Project) {
  return (
    <div className={cn("grid grid-cols-[1fr_7fr]")}>
      {/* Links */}
      <div className="mt-0.5 flex flex-col gap-0.5 pr-2 text-xs font-semibold uppercase">
        {links.map(({ name, url }) => (
          <InlineLink key={name} href={url} className="flex gap-1 text-clr">
            <LinkIcon className="size-[1rem]" />
            {name}
          </InlineLink>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        {/* Title */}
        <h3 className="items-baseline font-medium leading-tight text-auto+">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm">{description}</p>

        {/* Skills */}
        {skills && (
          <ul className="flex flex-wrap gap-2">
            {skills.map((tag) => (
              <li key={tag}>
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
    <div className="rounded-full bg-clr++/10 px-3 py-1 text-xs leading-5 text-clr+">
      {item}
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
      <div className="flex w-min flex-col pb-1 lg:hidden">
        <h2 className="text-xs font-bold uppercase text-auto+">{id}</h2>
        {/* <Separator /> */}
      </div>
      {children}
    </section>
  );
}

function LinkArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={cn(
        "size-4 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none",
        className,
      )}
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
      className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover/link:translate-x-2 group-focus-visible/link:translate-x-2 motion-reduce:transition-none"
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

function Separator({ className }: { className?: string }) {
  return (
    <hr className={cn("w-full border-[0.5px] border-auto", className)}></hr>
  );
}

function SeparatorWith({
  text,
  className,
  pt,
}: {
  text: string;
  pt?: `${string}-${number}`;
  className?: string;
}) {
  return (
    <div className={"flex items-center " + pt}>
      <Separator className="grow" />
      <span
        className={cn(
          "shrink px-4 text-sm font-semibold uppercase text-clr",
          className,
        )}
      >
        {text}
      </span>
      <Separator className="grow" />
    </div>
  );
}
