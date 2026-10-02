import { BlockLink, InlineLink } from "@/components/link";
import { Experience } from "@/components/experience";
import { albums, movies, series } from "@/fun_data";
import { Separator } from "@/components/separator";
import { experiences, projects } from "@/data";
import { Socials } from "@/components/socials";
import { Project } from "@/components/project";
import { Section } from "@/components/section";
import { Album } from "@/components/fun/album";
import { Show } from "@/components/fun/show";

export default function Home() {
  return (
    <>
      <div className="h-1 snap-none" />
      <div className="h-0 snap-start snap-always bg-green-300" />

      {/* Professional */}
      <div className="mx-auto max-w-screen-xl snap-end snap-always p-6 lg:grid lg:grid-cols-[2fr_3fr] lg:gap-4 lg:px-24 lg:pt-24 lg:pb-12">
        <header className="flex h-min flex-col lg:sticky lg:top-24">
          <Me />
          <Socials className="py-4" />
        </header>

        <main id="main-content" tabIndex={-1} className="flex flex-col gap-4">
          <About />
          <Projects />
          <Experiences />
        </main>

        <footer className="col-start-2">
          <Separator className="my-8" />
          <Thanks />
        </footer>
      </div>

      {/* Transition */}
      <div
        className="h-[300vh] snap-none"
        style={{
          backgroundImage: "linear-gradient(to bottom, #f1f5f9, #25283d)",
        }}
      />

      {/* Fun */}
      {/* <div className="h-96 snap-start snap-always bg-green-300" /> */}
      <div className="snap-start snap-always bg-[#25283D] font-sans text-[#e5e5e5]">
        <Fun />
      </div>

      <div className="h-0 snap-end snap-always bg-green-300" />
      <div className="h-1 snap-none" />
    </>
  );
}

const Me = () => (
  <>
    <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
      Brendon Zimmer
    </h1>
    <h2 className="pt-3 text-lg font-medium text-ink sm:text-xl">
      Full-Stack Software Engineer
    </h2>
    <p className="max-w-72 pt-4">
      I build to make the world a more enjoyable, better place.
    </p>
  </>
);

const About = () => (
  <Section.Simple name="About">
    <p>
      I&apos;m a software engineer at Bloomberg in New York and a USC computer
      science graduate. I graduated magna cum laude in 2025.
    </p>
    <p>
      I like understanding how things work, then making them easier to use. My
      projects span developer tooling, distributed systems, and small apps that
      solve everyday problems.
    </p>
    <p>
      Recently, that includes{" "}
      <a
        href="https://github.com/b-relay/rig"
        target="_blank"
        rel="noopener noreferrer"
      >
        Rig
      </a>
      , local deployment tooling for Mac projects. Earlier work helped students
      find open course seats, moved music between platforms, and explored
      creative ways to work with data.
    </p>
    <p>
      Outside of software: music, movies, getting outdoors, and finding
      somewhere good to eat.
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
    link={null}
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

const Fun = () => (
  <>
    <div className="hidden pt-8 lg:block"></div>
    <div className="sticky top-0 z-10 bg-[#25283D]/90 px-6 pt-6 pb-4 backdrop-blur-md lg:px-24 lg:pt-4">
      <h2 className="text-3xl font-medium">🏡 brendon&apos;s corner</h2>
      <p>some things i like 🙂</p>
    </div>
    <div className="flex min-h-screen flex-col gap-4 px-6 pt-4 pb-6 lg:px-24 lg:pt-4 lg:pb-12">
      <div className="">
        <h2 className="py-1 text-2xl">🎶 Albums</h2>
        <Albums />
      </div>
      <div className="">
        <h2 className="py-1 text-2xl">🎥 Movies </h2>
        <Movies />
      </div>
      <div className="">
        <h2 className="py-1 text-2xl">📺 Series</h2>
        <Series />
      </div>
    </div>
  </>
);

const Movies = () => (
  <div
    tabIndex={0}
    aria-label="Movies"
    className="-mr-6 -ml-24 scrollbar-none overflow-x-scroll pr-6 pl-24 lg:-mr-24 lg:-ml-24"
  >
    <div className="flex min-w-min gap-4 py-2">
      {movies.map((m) => (
        <Show key={m.title} image={m.image} title={m.title} />
      ))}
    </div>
  </div>
);

const Series = () => (
  <div
    tabIndex={0}
    aria-label="Series"
    className="-mr-6 -ml-24 scrollbar-none overflow-x-scroll pr-6 pl-24 lg:-mr-24 lg:-ml-24"
  >
    <div className="flex min-w-min gap-4 py-2">
      {series.map((tv) => (
        <Show key={tv.title} image={tv.image} title={tv.title} />
      ))}
    </div>
  </div>
);

const Albums = () => (
  <div
    tabIndex={0}
    aria-label="Albums"
    className="-mr-6 -ml-24 scrollbar-none overflow-x-scroll pr-6 pl-24 lg:-mr-24 lg:-ml-24"
  >
    <div className="flex min-w-min gap-4 py-2">
      {albums.map((a) => (
        <Album
          key={a.title}
          image={a.image}
          title={a.title}
          author={a.author}
        />
      ))}
    </div>
  </div>
);
