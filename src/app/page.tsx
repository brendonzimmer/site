import { BlockLink, InlineLink } from "@/components/link";
import { Experience, Project } from "@/components/item";
import { Separator } from "@/components/separator";
import { SocialList } from "@/components/socials";
import { experiences, projects } from "@/data";
import { Divider } from "@/components/divider";

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
    <h1 className="text-5xl font-bold tracking-tight text-auto+">
      Brendon Zimmer
    </h1>
    <h2 className="pt-3 text-lg font-medium text-auto+">
      Undergraduate Full-Stack Engineer
    </h2>
    <p className="pt-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>
  </>
);

const About = () => (
  <section>
    <Divider text="About" className="py-4" sticky />
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
  <section>
    <Divider text="Experience" className="py-4" sticky />
    <div className="flex flex-col gap-6 pt-4 lg:gap-12">
      <ol className="flex flex-col gap-6 lg:gap-12">
        {experiences.map((experience) => (
          <li key={`${experience.company.name}_${experience.date}`}>
            <Experience {...experience} />
          </li>
        ))}
      </ol>

      {/* Resume */}
      <BlockLink
        italic="view"
        text="Resume"
        href="/resume.pdf"
        target="_blank"
      />
    </div>
  </section>
);

const Projects = () => (
  <section>
    <Divider text="Projects" className="py-4" sticky />
    <div className="flex flex-col gap-6 pt-4 lg:gap-12">
      <ol className="flex flex-col gap-6 lg:gap-12">
        {projects
          .filter((p) => p.feature)
          .map((project) => (
            <li key={`${project.title}_${project.year}`}>
              <Project {...project} />
            </li>
          ))}
      </ol>

      {/* Project Archive */}
      <BlockLink
        italic="view"
        text="Project Archive"
        href="/projects"
        icon="right"
      />
    </div>
  </section>
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
