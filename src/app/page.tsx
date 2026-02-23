import { BlockLink, InlineLink } from "@/components/link";
import { Experience } from "@/components/experience";
import { albums, movies, series } from "@/fun_data";
import { Separator } from "@/components/separator";
import { educationLine, experiences, projects } from "@/data";
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
      <div className="mx-auto max-w-screen-xl snap-end snap-always p-6 lg:grid lg:grid-cols-[2fr_3fr] lg:gap-4 lg:px-24 lg:pb-12 lg:pt-24">
        <header className="flex h-min flex-col lg:sticky lg:top-24 ">
          <Me />
          <Socials className="py-4" />
        </header>

        <main className="flex flex-col gap-4">
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
      <div className="h-[300vh] snap-none bg-gradient-to-b from-auto-- to-[#25283D]" />

      {/* Fun */}
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
    <h1 className="text-4xl font-bold tracking-tight text-auto+ sm:text-5xl">
      Brendon Zimmer
    </h1>
    <h2 className="pt-3 text-lg font-medium text-auto+ sm:text-xl">
      Software Engineer
    </h2>
    <p className="max-w-72 pt-4">
      I like building useful software that feels good to use and holds up in the
      real world.
    </p>
  </>
);

const About = () => (
  <Section.Simple name="About">
    <p>
      I&apos;m currently a Software Engineer at Bloomberg in New York, where I
      focus on building reliable systems and clean product experiences.
    </p>
    <p>
      Outside of work, I spend most of my time building projects that start as
      curiosity and turn into tools I actually use.
    </p>
    <p>
      I care most about full-stack product development, backend reliability, and
      thoughtful software design.
    </p>
    <p>{educationLine}</p>
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
        href="https://drive.google.com/file/d/1eP_vfAZOjTEnYe7pspGa5UJvPybUAFoS/view?usp=drive_link"
        target="_blank"
      />
    }
  />
);

const Projects = () => (
  <Section.Items
    name="Projects"
    items={projects
      .filter((project) => project.group === "current")
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
      Built with Next.js and Tailwind CSS. Deployed with Vercel. Inspired by{" "}
      <InlineLink href="https://brittanychiang.com/">Brittany Chiang</InlineLink>
      .
    </h3>
  </div>
);

const Fun = () => (
  <>
    <div className="hidden pt-8 lg:block"></div>
    <div className="sticky top-0 z-10 bg-[#25283D]/90 px-6 pb-4 pt-6 backdrop-blur-md lg:px-24 lg:pt-4">
      <h1 className="text-3xl font-medium">🏡 brendon&apos;s corner</h1>
      <p>some things i like 🙂</p>
    </div>
    <div className="flex min-h-screen flex-col gap-4 px-6 pb-6 pt-4 lg:px-24 lg:pb-12 lg:pt-4">
      <div>
        <h2 className="py-1 text-2xl">🎶 Albums</h2>
        <Albums />
      </div>
      <div>
        <h2 className="py-1 text-2xl">🎥 Movies </h2>
        <Movies />
      </div>
      <div>
        <h2 className="py-1 text-2xl">📺 Series</h2>
        <Series />
      </div>
    </div>
  </>
);

const Movies = () => (
  <div className="-ml-24 -mr-6 overflow-x-scroll pl-24 pr-6 scrollbar-none lg:-ml-24 lg:-mr-24">
    <div className="flex min-w-min gap-4 py-2">
      {movies.map((movie) => (
        <Show key={movie.title} image={movie.image} title={movie.title} />
      ))}
    </div>
  </div>
);

const Series = () => (
  <div className="-ml-24 -mr-6 overflow-x-scroll pl-24 pr-6 scrollbar-none lg:-ml-24 lg:-mr-24">
    <div className="flex min-w-min gap-4 py-2">
      {series.map((show) => (
        <Show key={show.title} image={show.image} title={show.title} />
      ))}
    </div>
  </div>
);

const Albums = () => (
  <div className="-ml-24 -mr-6 overflow-x-scroll pl-24 pr-6 scrollbar-none lg:-ml-24 lg:-mr-24">
    <div className="flex min-w-min gap-4 py-2">
      {albums.map((album) => (
        <Album
          key={album.title}
          image={album.image}
          title={album.title}
          author={album.author}
        />
      ))}
    </div>
  </div>
);
