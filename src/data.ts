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
      "Addressed the challenge lowerclassmen face in enrolling for high-demand USC courses by developing a real-time seat availability checker. Built a Node.js app with TypeScript that monitors specific USC course sections for seat fluctuations, providing immediate notifications via Twilio SMS or Call. Initiated with Playwright for data scraping but transitioned to a fetch-based method resulting in a sub-2-second notification time and saving over 20x memory. This project laid the groundwork for the inception of ofCourse, my organization aimed at improving course exploration at USC, furthering my mission to assist students with course enrollment.",
    skills: ["USC API", "Playwright", "TypeScript", "Google Cloud", "Twilio"],
    links: [
      { name: "Code", url: "" },
      { name: "Article", url: "" },
    ],
    feature: true,
  },
  {
    title: "Music Playlist Transfer Service (v1)",
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
      { name: "Site", url: "https://v1.music.brendon.app" },
      { name: "Code", url: "https://github.com/brendonzimmer/music-garage" },
      { name: "Article", url: "" },
    ],
    feature: true,
  },
  {
    title: "Paxos-based Sharded RSM Key-Value Service",
    description:
      "Built multi-Paxos consensus protocol to facilitate distributed decision-making in sharded network. Designed a resilient Paxos Replicated State Machine (RSM) library, abstracting the Paxos layer and ensuring consistent replication across a distributed system.Leveraged my type-agnostic PaxosRSM library to build a robust and scalable Key-Value Store, ensuring efficient data retrieval and updates.",
    links: [
      { name: "Code", url: "" },
      { name: "Article", url: "" },
    ],
    skills: ["Golang", "Paxos", "Distributed Systems", "RSMs", "RPCs"],
    feature: true,
  },
  {
    title: "factor",
    description:
      "Developed as a way to learn the Rust programming language. A CLI tool designed to derive the prime factors of any 64-bit number. Easy to use and quick results.",
    skills: ["Rust", "CLI", "Algorithms"],
    img: { url: "/factor.png", alt: "Factor" },
    links: [
      { name: "Code", url: "https://github.com/brendonzimmer/factor" },
      { name: "Article", url: "" },
    ],
    feature: true,
  },
  {
    title: "ftov",
    description: "A Rust-based file-to-video encoding and decoding library!",
    skills: ["Rust", "CLI", "FFmpeg", "Iterators"],
    links: [
      { name: "Code", url: "https://github.com/brendonzimmer/ftov/tree/bw" },
      { name: "Article", url: "" },
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
      { name: "Article", url: "" },
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
