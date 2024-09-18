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
      <div className="h-0 snap-none" />
      <div className="h-0 snap-start" />

      {/* Professional */}
      <div className="mx-auto max-w-screen-xl snap-end p-6 lg:grid lg:grid-cols-[2fr_3fr] lg:gap-4 lg:px-24 lg:pb-12 lg:pt-24">
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
      <div className="h-[300vh] snap-none bg-gradient-to-b from-auto-- to-[#25283D]"></div>

      {/* Fun */}
      <div className="snap-start bg-[#25283D] font-sans text-[#e5e5e5]">
        <Fun />
      </div>

      <div className="h-0 snap-end" />
      <div className="h-0 snap-none" />
    </>
  );
}

const Me = () => (
  <>
    <h1 className="text-4xl font-bold tracking-tight text-auto+ sm:text-5xl">
      Brendon Zimmer
    </h1>
    <h2 className="pt-3 text-lg font-medium text-auto+ sm:text-xl">
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
      My journey into computer science began with curiosity about how software
      can solve real-world problems, and it has led me to work on projects that
      range from optimizing Docker containers to creating platforms that help
      students navigate university course registration.
    </p>
    <p>
      Currently, I&apos;m working on Sidenote, a music app that bridges Spotify
      and Apple Music, allowing friends to review, share, and discover music.
    </p>
    <p>
      My interests span full-stack web development, backend systems, distributed
      computing, and programming languages.
    </p>
    <p>
      When I&apos;m not coding, you&apos;ll find me out enjoying nature, hiking
      LA&apos;s trails, or trying new restaurants.
    </p>
    <p>
      As I approach graduation in May 2025, I&apos;m seeking full-time software
      engineering positions where I can contribute my skills and passion. If
      you&apos;re interested in collaborating or just want to chat about tech,
      music, or the best hiking spots, feel free to reach out.
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
    <div className="sticky top-0 z-10 bg-[#25283D]/90 px-6 pb-4 pt-6 backdrop-blur-md lg:px-24 lg:pt-4">
      <h1 className="text-3xl font-medium">🏡 brendon&apos;s corner</h1>
      <p>some things i like 🙂</p>
    </div>
    <div className="flex min-h-screen flex-col gap-4 px-6 pb-6 pt-4 lg:px-24 lg:pb-12 lg:pt-4">
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
  <div className="-ml-24 -mr-6 overflow-x-scroll px-24 scrollbar-none lg:-mx-24">
    <div className="flex min-w-min gap-4 py-2">
      {movies.map((m) => (
        <Show key={m.title} image={m.image} title={m.title} />
      ))}
    </div>
  </div>
);

const Series = () => (
  <div className="-ml-24 -mr-6 overflow-x-scroll px-24 scrollbar-none lg:-mx-24">
    <div className="flex min-w-min gap-4 py-2">
      {series.map((tv) => (
        <Show key={tv.title} image={tv.image} title={tv.title} />
      ))}
    </div>
  </div>
);

const Albums = () => (
  <div className="-ml-24 -mr-6 overflow-x-scroll px-24 scrollbar-none lg:-mx-24">
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
