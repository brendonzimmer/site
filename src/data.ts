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
      "Streamlined developer efficiency by developing Python library to programmatically run Docker containers and build images. Presented library and onboarded whole team. Fixed bugs and added new features in a large C++ codebase by completing over 20 Jira tickets.",
  },
] satisfies Experience[];

export type ProjectSummary = {
  what: string;
  impact: string;
  role: string;
};

export type Project = {
  title: string;
  year: number;
  group: "current" | "archive";
  status: "live" | "shipped" | "wip" | "archived";
  visibility: "public" | "private";
  summary: ProjectSummary;
  skills?: string[];
  links?: { name: string; url: string }[];
};

export const projects: Project[] = [
  {
    title: "wherami",
    year: 2026,
    group: "current",
    status: "live",
    visibility: "private",
    summary: {
      what: "An iOS location tracker that captures background points every two minutes.",
      impact:
        "Built for real-world city movement with queueing, replay safety, and semantic visit inference.",
      role: "I designed and built the mobile + backend pipeline using Expo, Convex, and SQLite.",
    },
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
    status: "wip",
    visibility: "private",
    summary: {
      what: "A workout logging app focused on fast session tracking and offline reliability.",
      impact:
        "Structured around resilient auth, sync, and recovery so sessions are never lost mid-workout.",
      role: "I built the product architecture and core workout state/sync flows.",
    },
    skills: ["React", "TypeScript", "Convex", "Better Auth", "Zustand"],
  },
  {
    title: "design",
    year: 2026,
    group: "current",
    status: "shipped",
    visibility: "private",
    summary: {
      what: "A component studio for generating and iterating React UI through chat.",
      impact:
        "Streams generation progress and live previews so edits feel immediate and collaborative.",
      role: "I built the orchestration layer across frontend, Bun server, and Convex state.",
    },
    skills: ["React", "Vite", "Bun", "Convex", "TypeScript"],
  },
  {
    title: "dot",
    year: 2026,
    group: "current",
    status: "shipped",
    visibility: "public",
    summary: {
      what: "A CLI for managing and deploying dotfiles with clearer workflows.",
      impact:
        "Turned repetitive machine setup into a simple repeatable command flow.",
      role: "I built and maintain the CLI with Bun, TypeScript, and robust prompts.",
    },
    skills: ["Bun", "TypeScript", "CLI", "Automation"],
    links: [{ name: "Code", url: "https://github.com/b-relay/dot" }],
  },
  {
    title: "budget",
    year: 2025,
    group: "current",
    status: "shipped",
    visibility: "private",
    summary: {
      what: "A local-first budgeting app that mirrors a spreadsheet workflow.",
      impact:
        "Supports import/export, annualized views, and offline-first personal finance tracking.",
      role: "I built the full frontend data model and UX in React + TypeScript.",
    },
    skills: ["React", "TypeScript", "Vite", "Tailwind CSS"],
  },
  {
    title: "melody",
    year: 2025,
    group: "archive",
    status: "archived",
    visibility: "private",
    summary: {
      what: "A music-social app concept for sharing, rating, and discovering songs with friends.",
      impact:
        "Explored product direction and mobile architecture for social listening experiences.",
      role: "I prototyped both app and API layers across Swift and TypeScript.",
    },
    skills: ["Swift", "TypeScript", "iOS", "API Design"],
  },
  {
    title: "usc-notifiy",
    year: 2024,
    group: "archive",
    status: "archived",
    visibility: "private",
    summary: {
      what: "A USC seat-availability notifier and registration helper tool.",
      impact:
        "Automated section monitoring and notifications for high-demand classes.",
      role: "I built the monitoring loop, parsing, and notification flow end to end.",
    },
    skills: ["TypeScript", "Playwright", "Twilio", "Automation"],
  },
  {
    title: "ftov",
    year: 2023,
    group: "archive",
    status: "archived",
    visibility: "public",
    summary: {
      what: "A CLI to encode and decode files through video representations.",
      impact:
        "Experimented with media pipelines and binary transformations in a practical CLI.",
      role: "I built the full toolchain in Rust with FFmpeg integration.",
    },
    skills: ["Rust", "CLI", "FFmpeg"],
    links: [{ name: "Code", url: "https://github.com/brendonzimmer/ftov" }],
  },
  {
    title: "status",
    year: 2023,
    group: "archive",
    status: "archived",
    visibility: "private",
    summary: {
      what: "A web app for sharing short status updates with friends and family.",
      impact:
        "Tested lightweight social presence patterns with simple publishing UX.",
      role: "I built the full-stack app with Next.js and PostgreSQL tooling.",
    },
    skills: ["TypeScript", "Next.js", "PostgreSQL", "Prisma"],
  },
  {
    title: "semagrams",
    year: 2021,
    group: "archive",
    status: "archived",
    visibility: "public",
    summary: {
      what: "A crowdsourced project inspired by the semagrams in sci-fi linguistics.",
      impact:
        "Combined collaborative input with creative worldbuilding in a web experience.",
      role: "I built the project frontend and deployed the full app.",
    },
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
    status: "archived",
    visibility: "public",
    summary: {
      what: "A programmatic art piece inspired by A Concordance of One's Life.",
      impact:
        "Translated literary ideas into an interactive visual narrative.",
      role: "I built the visual system with Three.js and p5.js.",
    },
    skills: ["JavaScript", "Three.js", "p5.js"],
    links: [
      { name: "Site", url: "https://concordance.brendon.app" },
      { name: "Code", url: "https://github.com/brendonzimmer/concordance" },
    ],
  },
] satisfies Project[];
