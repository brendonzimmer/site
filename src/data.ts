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
] satisfies Experience[];

export type Project = {
  img?: { url: string; alt: string };
  links: [{ name: string; url: string }, ...{ name: string; url: string }[]];
  title: string;
  description: string;
  skills?: string[];
  feature: boolean;
};
export const projects: Project[] = [
  {
    title: "USC Course Notifier",
    description:
      "A real-time seat availability checker for USC courses. Sends text messages when seats open up.",
    skills: ["USC API", "Playwright", "TypeScript", "Google Cloud", "Twilio"],
    links: [
      { name: "Code", url: "" },
      { name: "Blog", url: "" },
    ],
    feature: true,
  },
  {
    title: "Music Playlist Transfer Service (v1)",
    description:
      "A service to transfer your music from Spotify to Apple Music and vice versa with added customization.",
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
    links: [
      { name: "Site", url: "https://v1.music.brendon.app" },
      { name: "Code", url: "https://github.com/brendonzimmer/music-garage" },
      { name: "Blog", url: "" },
    ],
    feature: true,
  },
  {
    title: "Distributed Key-Value Service",
    description:
      "A sharded and replicated KV service with using Paxos for consensus.",
    links: [
      { name: "Code", url: "" },
      { name: "Blog", url: "" },
    ],
    skills: ["Golang", "Paxos", "Distributed Systems", "RSMs", "RPCs"],
    feature: true,
  },
  {
    title: "factor",
    description:
      "A CLI tool to easily derive the prime factors of any 64-bit number.",
    skills: ["Rust", "CLI", "Algorithms"],
    links: [
      { name: "Code", url: "https://github.com/brendonzimmer/factor" },
      { name: "Blog", url: "" },
    ],
    feature: true,
  },
  {
    title: "ftov",
    description:
      "A CLI tool to encode/decode files into/from their video representation.",
    skills: ["Rust", "CLI", "FFmpeg", "Iterators"],
    links: [
      { name: "Code", url: "https://github.com/brendonzimmer/ftov/tree/bw" },
      { name: "Blog", url: "" },
    ],
    feature: true,
  },
  {
    title: "status",
    description: "A fun way to share your status with friends and family!",
    skills: [
      "TypeScript",
      "Next.js",
      "Vercel",
      "PostgreSQL",
      "Tailwind CSS",
      "Prisma",
    ],
    links: [
      { name: "Code", url: "https://github.com/brendonzimmer/status" },
      { name: "Blog", url: "" },
    ],
    feature: false,
  },
  {
    title: "Concordance",
    description:
      'An art project based on the short story "A Concordance of One\'s Life" by Jim Nelson. Using three.js and p5.js. Final project for GESM 110.',
    skills: ["JavaScript", "Three.js", "p5.js"],
    links: [
      { name: "Site", url: "https://concordance.brendon.app" },
      { name: "Code", url: "https://github.com/brendonzimmer/concordance" },
    ],
    feature: false,
  },
  {
    title: "Semationary",
    description:
      'A crowd-sourced dictionary of semagrams, based of off "The Story of Your Life" by Ted Chiang. Project for USC GESM 110.',
    skills: ["TypeScript", "Next.js", "Tailwind CSS", "Vercel"],
    links: [
      { name: "Site", url: "https://semagrams.brendon.app" },
      { name: "Code", url: "https://github.com/brendonzimmer/semagrams" },
    ],
    feature: false,
  },
] satisfies Project[];
