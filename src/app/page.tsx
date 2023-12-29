import { BlockLink, InlineLink } from "@/components/link";
import { Experience } from "@/components/experience";
import { Separator } from "@/components/separator";
import { SocialList } from "@/components/socials";
import { experiences, projects } from "@/data";
import { Divider } from "@/components/divider";
import { Project } from "@/components/project";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-xl p-6 lg:grid lg:grid-cols-[2fr_3fr] lg:gap-4 lg:px-24 lg:pb-12 lg:pt-24">
      <header className="h-min lg:sticky lg:top-24">
        <Me />
        <SocialList className="py-4" />
      </header>

      <main className="flex flex-col gap-4">
        <About />
        <Experiences />
        <Projects />

        <Separator className="my-4" />
        <Footer />
      </main>
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
  <section>
    <Divider as="h2" text="About" className="py-4" sticky />
    <div className="flex flex-col gap-4 pt-4">
      <p>
        I&apos;m a software engineer in Los Angeles. I&apos;m currently working
        on <InlineLink href="https://ofcourse.fyi">ofc.fyi</InlineLink>.
        I&apos;m interested in distributed systems, programming languages, and
        developer tools.
      </p>
    </div>
  </section>
);

const Experiences = () => (
  <Section
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
  <Section
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

const Footer = () => (
  <footer className="flex flex-col gap-4">
    <h3>
      Coded in Visual Studio Code. Built with Next.js and Tailwind CSS. Deployed
      with Vercel. Inspired by{" "}
      <InlineLink href="https://brittanychiang.com/">
        Brittany Chiang
      </InlineLink>
      .
    </h3>
  </footer>
);

function Section({
  name,
  items,
  link,
}: {
  name: string;
  items: React.ReactNode[];
  link?: React.ReactNode;
}) {
  return (
    <section>
      <Divider as="h2" text={name} className="py-4" sticky />
      {link && (
        <div className="flex flex-col gap-8 pt-4 lg:gap-12">
          <ol className="flex flex-col gap-8 lg:gap-12">{items}</ol>
          {link}
        </div>
      )}

      {!link && <ol className="flex flex-col gap-8 lg:gap-12">{items}</ol>}
    </section>
  );
}
