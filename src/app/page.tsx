import Link from "next/link";
import { experiences, projects } from "@/data";
import { albums, movies, series } from "@/fun_data";
import { CollectionShelf } from "@/components/collection-shelf";
import { Socials } from "@/components/socials";

export default function Home() {
  return (
    <>
      <main id="main-content">
        <div className="site-shell portfolio-layout" id="top">
          <header className="identity">
            <h1>
              Brendon
              <br />
              Zimmer
            </h1>
            <p className="identity-role">Software Engineer</p>
            <p className="identity-location">Bloomberg · New York</p>
            <p className="identity-intro">
              I build to make the world a more enjoyable, better place.
            </p>
            <Socials className="identity-socials" />
            <nav className="section-nav" aria-label="Main navigation">
              <a href="#about">About</a>
              <a href="#work">Projects</a>
              <a href="#experience">Experience</a>
              <a href="#corner">
                brendon&apos;s corner <span aria-hidden="true">↓</span>
              </a>
            </nav>
          </header>
          <div className="portfolio-content">
            <section
              className="intro-section"
              id="about"
              aria-labelledby="about-title"
            >
              <SectionHeading id="about-title">About</SectionHeading>
              <div className="about-copy">
                <p>
                  I&apos;m a software engineer at Bloomberg in New York and a
                  USC computer science graduate. I graduated magna cum laude in
                  2025.
                </p>
                <p>
                  I like understanding how things work, then making them easier
                  to use. My projects span developer tooling, distributed
                  systems, and small apps that solve everyday problems.
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
                  , local deployment tooling for Mac projects. Earlier work
                  helped students find open course seats, moved music between
                  platforms, and explored creative ways to work with data.
                </p>
                <p>
                  Outside of software: music, movies, getting outdoors, and
                  finding somewhere good to eat. There&apos;s a collection of
                  favorites in <a href="#corner">my corner below</a>.
                </p>
              </div>
            </section>
            <section
              className="work-section"
              id="work"
              aria-labelledby="work-title"
            >
              <SectionHeading id="work-title">Projects</SectionHeading>
              <ol className="project-list">
                {projects
                  .filter((project) => project.feature)
                  .map((project) => (
                    <li className="project-row" key={project.title}>
                      <div className="project-title-row">
                        <h3>
                          {project.id ? (
                            <Link href={`/projects/${project.id}`}>
                              {project.title} <span aria-hidden="true">↗</span>
                            </Link>
                          ) : (
                            project.title
                          )}
                        </h3>
                        <span className="project-year">{project.year}</span>
                      </div>
                      <p className="project-description">
                        {project.description}
                      </p>
                      <ul
                        className="project-skills"
                        aria-label={`${project.title} technologies`}
                      >
                        {project.skills?.map((skill) => (
                          <li key={skill}>{skill}</li>
                        ))}
                      </ul>
                      <div className="project-actions">
                        {project.id && (
                          <Link
                            className="text-link"
                            href={`/projects/${project.id}`}
                          >
                            Project overview <span aria-hidden="true">↗</span>
                          </Link>
                        )}
                        {project.links
                          ?.filter((link) => link.url.trim())
                          .map((link) => (
                            <a
                              className="text-link"
                              key={link.name}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${link.name === "Site" ? "Visit site" : "View code"} for ${project.title} (opens in a new tab)`}
                            >
                              {link.name === "Site"
                                ? "Visit site"
                                : "View code"}{" "}
                              <span aria-hidden="true">↗</span>
                            </a>
                          ))}
                      </div>
                    </li>
                  ))}
              </ol>
              <Link className="text-link section-end-link" href="/projects">
                View project archive <span aria-hidden="true">→</span>
              </Link>
            </section>
            <section
              className="experience-section"
              id="experience"
              aria-labelledby="experience-title"
            >
              <SectionHeading id="experience-title">Experience</SectionHeading>
              <ol className="experience-list">
                {experiences.map((experience) => (
                  <li className="experience-row" key={experience.company.name}>
                    <p className="experience-date">{experience.date}</p>
                    <div>
                      <h3>
                        <a
                          href={experience.company.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {experience.company.name}{" "}
                          <span aria-hidden="true">↗</span>
                        </a>
                      </h3>
                      <p className="experience-role">
                        {experience.roles.map(({ role }) => role).join(" · ")}
                      </p>
                      <p className="experience-description">
                        {experience.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
              <a
                className="text-link section-end-link"
                href="https://linkedin.com/in/brendonzimmer"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </section>
            <div className="portfolio-colophon">
              <p>
                Built with Next.js and Tailwind CSS. Deployed with Vercel.
                Inspired by{" "}
                <a
                  href="https://brittanychiang.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Brittany Chiang
                </a>
                .
              </p>
              <a className="text-link" href="#corner">
                A little less code, a little more me{" "}
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </div>
        <section
          className="corner-section"
          id="corner"
          aria-labelledby="corner-title"
        >
          <div className="site-shell">
            <div className="corner-heading">
              <h2 id="corner-title">🏡 brendon&apos;s corner</h2>
              <p>some things i like 🙂</p>
            </div>
            <CollectionShelf
              title="🎶 Albums"
              description="Music"
              items={albums}
              kind="album"
            />
            <CollectionShelf
              title="🎥 Movies"
              description="Film"
              items={movies}
              kind="show"
            />
            <CollectionShelf
              title="📺 Series"
              description="Television"
              items={series}
              kind="show"
            />
            <a className="corner-back" href="#top">
              Back to the top ↑
            </a>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="site-shell">
          <p>Brendon Zimmer</p>
          <a
            href="https://linkedin.com/in/brendonzimmer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Say hello ↗
          </a>
        </div>
      </footer>
    </>
  );
}

function SectionHeading({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div className="section-heading">
      <span aria-hidden="true" />
      <h2 id={id}>{children}</h2>
      <span aria-hidden="true" />
    </div>
  );
}
