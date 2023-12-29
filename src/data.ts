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
    description: "",
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
    description: "",
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
    description: "",
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
  links?: { name: string; url: string }[];
  title: string;
  description: string;
  skills?: string[];
  feature: boolean;
  year: number;
  blogID?: string;
};
export const projects: Project[] = [
  {
    title: "USC Course Notifier",
    description:
      "A real-time seat availability checker for USC courses. Sends text messages when seats open up.",
    skills: ["USC API", "Playwright", "TypeScript", "Google Cloud", "Twilio"],
    links: [{ name: "Code", url: "" }],
    blogID: "none",
    feature: true,
    year: 2022,
  },
  {
    title: "Music Playlist Transfer Service (v1)",
    description:
      "A service to transfer your music between Spotify to Apple Music with added customization.",
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
    ],
    blogID: "none",
    feature: true,
    year: 2021,
  },
  {
    title: "Distributed Key-Value Service",
    description:
      "A sharded and replicated KV service with using Paxos for consensus.",
    links: [{ name: "Code", url: "" }],
    blogID: "none",
    skills: ["Golang", "Paxos", "Distributed Systems", "RSMs", "RPCs"],
    feature: true,
    year: 2023,
  },
  {
    title: "factor",
    description:
      "A CLI tool to easily derive the prime factors of any 64-bit number.",
    skills: ["Rust", "CLI", "Algorithms"],
    links: [{ name: "Code", url: "https://github.com/brendonzimmer/factor" }],
    blogID: "none",
    feature: true,
    year: 2023,
  },
  {
    title: "ftov",
    description:
      "A CLI tool to encode/decode files into/from their video representation.",
    skills: ["Rust", "CLI", "FFmpeg", "Iterators"],
    links: [
      { name: "Code", url: "https://github.com/brendonzimmer/ftov/tree/bw" },
    ],
    blogID: "none",
    feature: true,
    year: 2023,
  },
  {
    title: "status",
    description: "A web app to share your status with friends and family.",
    skills: [
      "TypeScript",
      "Next.js",
      "Vercel",
      "PostgreSQL",
      "Tailwind CSS",
      "Prisma",
    ],
    links: [{ name: "Code", url: "https://github.com/brendonzimmer/status" }],
    blogID: "none",
    feature: false,
    year: 2023,
  },
  {
    title: "Concordance",
    description:
      'A programmatic art piece based on the short story "A Concordance of One\'s Life" by Jim Nelson.',
    skills: ["JavaScript", "Three.js", "p5.js"],
    links: [
      { name: "Site", url: "https://concordance.brendon.app" },
      { name: "Code", url: "https://github.com/brendonzimmer/concordance" },
    ],
    feature: false,
    year: 2021,
  },
  {
    title: "Semationary",
    description:
      'A crowdsourced collection of semagrams inspired by "The Story of Your Life" by Ted Chiang.',
    skills: ["TypeScript", "Next.js", "Tailwind CSS", "Vercel"],
    links: [
      { name: "Site", url: "https://semagrams.brendon.app" },
      { name: "Code", url: "https://github.com/brendonzimmer/semagrams" },
    ],
    feature: false,
    year: 2021,
  },
] satisfies Project[];
