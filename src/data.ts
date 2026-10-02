export type Experience = {
  date: string;
  roles: [
    { role: string; current?: boolean },
    ...{ role: string; current?: boolean }[],
  ];
  company: { name: string; url: string };
  description?: string;
  skills?: string[];
};
export const experiences: Experience[] = [
  {
    roles: [{ role: "Software Engineer", current: true }],
    date: "Now",
    company: { name: "Bloomberg", url: "https://www.bloomberg.com/company/" },
    description: "Software engineering in New York City.",
  },
  {
    roles: [{ role: "Founder & President" }],
    date: "Started Jan 2024",
    company: { name: "ofCourse", url: "https://ofcourse.fyi" },
    description:
      "Led a 12-person team working with Student Government to make USC course registration easier. Built tools for finding open seats, exploring courses, and reading student reviews.",
  },
  {
    roles: [
      { role: "Software Engineer" },
      { role: "Executive Board Member" },
      { role: "Director of Recruitment" },
    ],
    date: "Started Jan 2023",
    company: { name: "TroyLabs", url: "https://troylabs.vc" },
    description:
      "Worked with startups through weekly BUILD meetings, delivering features and technical guidance. Also helped lead recruitment and onboarding, from applicant events and group interviews to welcoming new members.",
  },
  {
    company: { name: "Spotlight Media", url: "https://tryspotlight.co" },
    date: "Apr — Jul 2024",
    roles: [{ role: "Software Engineer", current: false }],
    description:
      "Built Python automation for influencer discovery and outreach, increasing daily outreach from 350 to 2,000 messages per account. Launched a Google Cloud subscription service that generated $2,500 in its first week.",
  },

  {
    roles: [{ role: "Software Engineer Intern", current: false }],
    date: "May — Aug 2023",
    company: { name: "Crabel Capital Management", url: "https://crabel.com" },
    description:
      "Built a Python library for running Docker containers and building images, then introduced it to the team. Shipped bug fixes and features across a large C++ codebase.",
  },
  {
    roles: [{ role: "Web Developer", current: false }],
    date: "Jan — Aug 2022",
    company: { name: "METRANS TSA", url: "https://www.metrans.org" },
    description:
      "Improved a Squarespace website’s usability and accessibility with custom JavaScript, HTML, and CSS.",
  },
] satisfies Experience[];

export type Project = {
  links?: { name: string; url: string }[];
  title: string;
  description: string;
  skills?: string[];
  feature: boolean;
  year: number;
  id?: string;
};
export const projects: Project[] = [
  {
    title: "Rig",
    description:
      "Local deployment tooling for Mac projects. A CLI, daemon, and Git helper for running services, inspecting logs, and managing preview and live deployments.",
    skills: ["TypeScript", "Bun", "Zod", "Developer tooling"],
    links: [{ name: "Code", url: "https://github.com/b-relay/rig" }],
    feature: true,
    year: 2026,
  },
  {
    id: "ofc",
    title: "USC Course Notifier",
    description:
      "A real-time seat availability checker for USC courses. Sends text messages when seats open up.",
    skills: ["USC API", "Playwright", "TypeScript", "Google Cloud", "Twilio"],
    links: [],
    feature: true,
    year: 2022,
  },
  {
    // id: "playlist-transfer",
    title: "Music Garage",
    description:
      "An early music-transfer project connecting Spotify and Apple Music, built with their APIs, OAuth, and Next.js.",
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
      { name: "Code", url: "https://github.com/brendonzimmer/music-garage" },
    ],
    feature: false,
    year: 2021,
  },
  {
    // id: "distributed-kv",
    title: "Distributed Key-Value Service",
    description:
      "A sharded and replicated key-value service using Paxos for consensus.",
    links: [],
    skills: ["Golang", "Paxos", "Distributed Systems", "RSMs", "RPCs"],
    feature: false,
    year: 2023,
  },
  {
    // id: "factor",
    title: "factor",
    description:
      "A small Rust command-line tool for prime factorization of 64-bit integers.",
    skills: ["Rust", "CLI", "Algorithms"],
    links: [{ name: "Code", url: "https://github.com/brendonzimmer/factor" }],
    feature: true,
    year: 2023,
  },
  {
    // id: "ftov",
    title: "ftov",
    description:
      "An unfinished Rust experiment in file-to-video encoding, using FFmpeg and a square-pattern iterator.",
    skills: ["Rust", "CLI", "FFmpeg", "Iterators"],
    links: [
      { name: "Code", url: "https://github.com/brendonzimmer/ftov/tree/bw" },
    ],
    feature: false,
    year: 2023,
  },
  {
    // id: "status",
    title: "status",
    description:
      "An earlier web-app project for sharing personal updates with friends and family.",
    skills: [
      "TypeScript",
      "Next.js",
      "Vercel",
      "PostgreSQL",
      "Tailwind CSS",
      "Prisma",
    ],
    links: [],
    feature: false,
    year: 2023,
  },
  {
    title: "Concordance",
    description:
      'An experiment in generative art, built with Three.js and p5.js and inspired by the short story "A Concordance of One\'s Life" by Jim Nelson.',
    skills: ["JavaScript", "Three.js", "p5.js"],
    links: [
      { name: "Code", url: "https://github.com/brendonzimmer/concordance" },
    ],
    feature: true,
    year: 2021,
  },
  {
    title: "Semationary",
    description:
      'A crowdsourced visual dictionary of semagrams, inspired by "The Story of Your Life" by Ted Chiang.',
    skills: ["TypeScript", "Next.js", "Tailwind CSS", "Vercel"],
    links: [
      { name: "Code", url: "https://github.com/brendonzimmer/semagrams" },
    ],
    feature: false,
    year: 2021,
  },
] satisfies Project[];
