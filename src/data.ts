export type Description = string[];
export const description: Description = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ipsam provident temporibus esse similique voluptates explicabo ex impedit iusto, nostrum exercitationem, enim assumenda modi blanditiis quasi ut. Error, dicta doloribus. Officia corrupti esse neque iusto reprehenderit non. Placeat ab, numquam aut sapiente corporis omnis similique aspernatur commodi est aliquid illo minima. Quia deserunt corrupti quo amet earum cupiditate repellat ipsam.",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quas nihil illo ipsam, odit maiores, eaque explicabo unde reprehenderit omnis autem eius. Pariatur natus illum praesentium molestias possimus neque vitae.",
];

export type Experience = {
  date: string;
  roles: [
    { role: string; current: boolean },
    ...{ role: string; current: boolean }[],
  ];
  company: { name: string; url: string };
  description?: string;
  skills?: string[];
};
export const experiences: Experience[] = [
  {
    roles: [{ role: "Founder & President", current: true }],
    date: "Aug 2023 — Present",
    company: { name: "ofCourse", url: "https://ofcourse.fyi" },
    description:
      "ofCourse is a platform to simplify USC course exploration. We are a USC-recognized student-organization focused on its development. ofcourse.fyi is a platform for students to share their experiences with courses and professors to help others make informed decisions.",
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "PostgreSQL",
      "Google Cloud",
      "USC API",
      "Bun",
      "Tailwind CSS",
      "Teamwork",
      "Vercel",
      "Event Planning",
    ],
  },
  {
    roles: [
      { role: "Director of Recruitment", current: true },
      { role: "Engineer & Consultant", current: true },
    ],
    date: "Jan 2023 — Present",
    company: { name: "TroyLabs", url: "https://troylabs.vc" },
    description:
      "TroyLabs is a venture platform at USC, empowering the Trojan community to transform ideas into reality with funding resources, startup guidance, and community involvement.",
    skills: [
      "Consulting",
      "Leadership",
      "Event Planning",
      "Teamwork",
      "DB Management",
    ],
  },
  {
    roles: [{ role: "Software Engineer Intern", current: false }],
    date: "May — Aug 2023",
    company: { name: "Crabel Capital Management", url: "https://crabel.com" },
    description:
      "Crabel Capital Management is a quantitative asset management firm with a focus on algorithmic trading in global futures.",
    skills: [
      "Python",
      "C++",
      "GDB",
      "OOP Design",
      "Agile",
      "Docker",
      "Podman",
      "RHEL",
    ],
  },
  {
    roles: [{ role: "Web Developer", current: false }],
    date: "Jan — Aug 2022",
    company: { name: "METRANS TSA", url: "https://www.metrans.org" },
    skills: ["HTML", "CSS", "JavaScript", "Squarespace"],
  },
];

export type Project = {
  img: { url: string; alt: string };
  links: [{ name: string; url: string }, ...{ name: string; url: string }[]];
  title: string;
  description: string;
  skills?: string[];
};
export const projects: Project[] = [
  {
    title: "Music Garage (v1)",
    description:
      "A music transfer service to transfer your music from Spotify to Apple Music and vice versa. Utilized ISRC codes to make song matching highly accurate and provides custom album cover options.",
    skills: [
      "Spotify API",
      "Apple Music API",
      "OAuth",
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Vercel",
    ],
    img: { url: "/mg.png", alt: "Music Garage" },
    links: [
      { name: "Code", url: "https://github.com/brendonzimmer/music-garage" },
      { name: "Site", url: "https://v1.music.brendon.app" },
    ],
  },
  {
    title: "Factor",
    description: "Find the prime factorization of a number!",
    skills: ["Rust", "CLI", "Algorithms"],
    img: { url: "/factor.png", alt: "Factor" },
    links: [{ name: "Code", url: "https://github.com/brendonzimmer/factor" }],
  },
];
