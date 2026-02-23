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

export const educationLine = "CS @ USC (Fight On!)";

export const experiences: Experience[] = [
  {
    roles: [{ role: "Software Engineer", current: true }],
    date: "Sep 2025 — Present",
    company: { name: "Bloomberg", url: "https://www.bloomberg.com" },
    description:
      "Software Engineer at Bloomberg in New York, building reliable systems and product experiences.",
  },
  {
    roles: [
      { role: "Software Engineer", current: true },
      { role: "Executive Board Member", current: false },
      { role: "Director of Recruitment", current: false },
    ],
    date: "Jan 2023 — May 2025",
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
      "Streamlined developer efficiency by developing Python library to programmatically run Docker containers and build images. Presented library and onboarded whole team. Fixed bugs and added new features in a large C++ codebase by completing over 20 Jira tickets.",
  },
] satisfies Experience[];

export type Project = {
  title: string;
  year: number;
  group: "current" | "backlog" | "archive";
  status: "active" | "backlog" | "archive";
  visibility: "public" | "private";
  description: string;
  skills?: string[];
  links?: { name: string; url: string }[];
};

export const projects: Project[] = [
  {
    title: "wherami",
    year: 2026,
    group: "current",
    status: "active",
    visibility: "private",
    description:
      "iOS background location tracker with queueing, replay safety, and semantic visit inference.",
    skills: [
      "Expo",
      "React Native",
      "TypeScript",
      "Convex",
      "SQLite",
      "Background Tasks",
    ],
  },
  {
    title: "gymlog",
    year: 2026,
    group: "current",
    status: "active",
    visibility: "private",
    description:
      "Workout logging app focused on fast session tracking with resilient auth, sync, and offline reliability.",
    skills: ["React", "TypeScript", "Convex", "Better Auth", "Zustand"],
  },
  {
    title: "design",
    year: 2026,
    group: "current",
    status: "active",
    visibility: "private",
    description:
      "Chat-driven component studio for generating and iterating React UI with streaming progress and live previews.",
    skills: ["React", "Vite", "Bun", "Convex", "TypeScript"],
  },
  {
    title: "dot",
    year: 2026,
    group: "current",
    status: "active",
    visibility: "public",
    description:
      "CLI for managing and deploying dotfiles with simple, repeatable command flows.",
    skills: ["Bun", "TypeScript", "CLI", "Automation"],
    links: [{ name: "Code", url: "https://github.com/b-relay/dot" }],
  },
  {
    title: "budget",
    year: 2025,
    group: "backlog",
    status: "backlog",
    visibility: "private",
    description:
      "Local-first budgeting app that mirrors a spreadsheet workflow with import/export and annualized views.",
    skills: ["React", "TypeScript", "Vite", "Tailwind CSS"],
  },
  {
    title: "melody",
    year: 2025,
    group: "backlog",
    status: "backlog",
    visibility: "private",
    description:
      "Music-social app concept for sharing, rating, and discovering songs with friends.",
    skills: ["Swift", "TypeScript", "iOS", "API Design"],
  },
  {
    title: "usc-notifiy",
    year: 2024,
    group: "archive",
    status: "archive",
    visibility: "private",
    description:
      "USC seat-availability notifier that automated section monitoring and notifications for high-demand classes.",
    skills: ["TypeScript", "Playwright", "Twilio", "Automation"],
  },
  {
    title: "ftov",
    year: 2023,
    group: "archive",
    status: "archive",
    visibility: "public",
    description:
      "CLI to encode and decode files through video representations using Rust and FFmpeg.",
    skills: ["Rust", "CLI", "FFmpeg"],
    links: [{ name: "Code", url: "https://github.com/brendonzimmer/ftov" }],
  },
  {
    title: "status",
    year: 2023,
    group: "archive",
    status: "archive",
    visibility: "private",
    description:
      "Web app for sharing short status updates with friends and family.",
    skills: ["TypeScript", "Next.js", "PostgreSQL", "Prisma"],
  },
  {
    title: "semagrams",
    year: 2021,
    group: "archive",
    status: "archive",
    visibility: "public",
    description:
      "Crowdsourced project inspired by the semagrams in sci-fi linguistics.",
    skills: ["TypeScript", "Next.js", "Tailwind CSS"],
    links: [
      { name: "Site", url: "https://semagrams.brendon.app" },
      { name: "Code", url: "https://github.com/brendonzimmer/semagrams" },
    ],
  },
  {
    title: "concordance",
    year: 2021,
    group: "archive",
    status: "archive",
    visibility: "public",
    description:
      "Programmatic art piece inspired by A Concordance of One's Life, built with Three.js and p5.js.",
    skills: ["JavaScript", "Three.js", "p5.js"],
    links: [
      { name: "Site", url: "https://concordance.brendon.app" },
      { name: "Code", url: "https://github.com/brendonzimmer/concordance" },
    ],
  },
] satisfies Project[];
