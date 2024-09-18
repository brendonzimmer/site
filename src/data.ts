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
    date: "Jan 2024 — Present",
    company: { name: "ofCourse", url: "https://ofcourse.fyi" },
    description:
      "Led team of 12 in collaboration with Student Government to develop platform to simplify USC course registration and exploration for students. Enabled students to enroll in previously full courses, access reviews to gain better understanding of courses without syllabi.",
  },
  {
    roles: [
      { role: "Software Engineer", current: true }, // move descriptions into here, maybe date too?
      { role: "Executive Board Member", current: true },
      { role: "Director of Recruitment", current: true },
    ],
    date: "Jan 2023 — Present",
    company: { name: "TroyLabs", url: "https://troylabs.vc" },
    description:
      "Delivered new features, tailored tech solutions, and strategic consultation to startups in weekly BUILD meetings. Oversaw full recruitment cycle, managing applicant events, group interviews, and facilitating weekly onboarding sessions to ensure cultural integration and support for new members.",
  },
  {
    company: { name: "Spotlight Media", url: "https://tryspotlight.co" },
    date: "Apr — Jul 2024",
    roles: [{ role: "Software Engineer", current: false }],
    description:
      "Increased TikTok influencer outreach from 350 to 2,000 messages per account daily by building a highly optimized Python web scraper. Found thousands of new potential clients daily, up from 300 by analyzing internal TikTok APIs. Launched a subscription service using Google Cloud Platform and generated $2,500 in the first week.",
  },

  {
    roles: [{ role: "Software Engineer Intern", current: false }],
    date: "May — Aug 2023",
    company: { name: "Crabel Capital Management", url: "https://crabel.com" },
    description:
      "Streamlined developer efficiency by developing Python library to programmatically run Docker containers & build images. Presented library and onboarded whole team. Fixed bugs and added new fetaures in a large C++ codebase by completing over 20 Jira tickets.",
  },
  {
    roles: [{ role: "Web Developer", current: false }],
    date: "Jan — Aug 2022",
    company: { name: "METRANS TSA", url: "https://www.metrans.org" },
    description:
      "Improved UX and accessibility on Squarespace site using custom JS, HTML, and CSS.",
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
    id: "ofc",
    title: "USC Course Notifier",
    description:
      "A real-time seat availability checker for USC courses. Sends text messages when seats open up.",
    skills: ["USC API", "Playwright", "TypeScript", "Google Cloud", "Twilio"],
    links: [{ name: "Code", url: "" }],
    feature: true,
    year: 2022,
  },
  {
    // id: "playlist-transfer",
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
    feature: true,
    year: 2021,
  },
  {
    // id: "distributed-kv",
    title: "Distributed Key-Value Service",
    description:
      "A sharded and replicated KV service with using Paxos for consensus.",
    links: [{ name: "Code", url: "" }],
    skills: ["Golang", "Paxos", "Distributed Systems", "RSMs", "RPCs"],
    feature: true,
    year: 2023,
  },
  {
    // id: "factor",
    title: "factor",
    description:
      "A CLI tool to easily derive the prime factors of any 64-bit number.",
    skills: ["Rust", "CLI", "Algorithms"],
    links: [{ name: "Code", url: "https://github.com/brendonzimmer/factor" }],
    feature: true,
    year: 2023,
  },
  {
    // id: "ftov",
    title: "ftov",
    description:
      "A CLI tool to encode/decode files into/from their video representation.",
    skills: ["Rust", "CLI", "FFmpeg", "Iterators"],
    links: [
      { name: "Code", url: "https://github.com/brendonzimmer/ftov/tree/bw" },
    ],
    feature: true,
    year: 2023,
  },
  {
    // id: "status",
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
