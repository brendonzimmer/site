import { BlockLink, InlineLink } from "@/components/link";
import { Experience } from "@/components/experience";
import { Separator } from "@/components/separator";
import { experiences, projects } from "@/data";
import { Socials } from "@/components/socials";
import { Project } from "@/components/project";
import { Section } from "@/components/section";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-xl p-6 lg:grid lg:grid-cols-[2fr_3fr] lg:gap-4 lg:px-24 lg:pb-12 lg:pt-24">
      <header className="h-min lg:sticky lg:top-24">
        <Me />
        <Socials className="py-4" />
      </header>

      <main className="flex flex-col gap-4">
        <About />
        <Experiences />
        <Projects />
      </main>

      <footer className="col-start-2">
        <Separator className="my-8" />
        <Thanks />
      </footer>
    </div>
  );
}

const Me = () => (
  <>
    <h1 className="text-4xl font-bold tracking-tight text-auto+ sm:text-5xl">
      Brendon Zimmer
    </h1>
    <h2 className="pt-3 text-lg font-medium text-auto+ sm:text-xl">
      Undergraduate Full-Stack Engineer
    </h2>
    <p className="pt-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>
  </>
);

const About = () => (
  <Section.Simple name="About">
    <p>
      I&apos;m a software engineer in Los Angeles. I&apos;m currently working on{" "}
      <InlineLink href="https://ofcourse.fyi">ofc.fyi</InlineLink>. I&apos;m
      interested in distributed systems, programming languages, and developer
      tools.
    </p>
  </Section.Simple>
);

const Experiences = () => (
  <Section.Items
    name="Experiences"
    items={experiences.map((experience) => (
      <li key={`${experience.company.name}_${experience.date}`}>
        <Experience {...experience} />
      </li>
    ))}
    link={
      <BlockLink
        italic="view"
        text="Resume"
        href="/resume.pdf"
        target="_blank"
      />
    }
  />
);

const Projects = () => (
  <Section.Items
    name="Projects"
    items={projects
      .filter((p) => p.feature)
      .map((project) => (
        <li key={`${project.title}_${project.year}`}>
          <Project {...project} />
        </li>
      ))}
    link={
      <BlockLink
        italic="view"
        text="Project Archive"
        href="/projects"
        icon="right"
      />
    }
  />
);

const Thanks = () => (
  <div className="flex flex-col gap-4">
    <h3>
      Coded in Visual Studio Code. Built with Next.js and Tailwind CSS. Deployed
      with Vercel. Inspired by{" "}
      <InlineLink href="https://brittanychiang.com/">
        Brittany Chiang
      </InlineLink>
      .
    </h3>
  </div>
);
