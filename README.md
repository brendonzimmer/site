# brendon.app

Brendon Zimmer's personal site, built with Next.js, React, TypeScript, and Tailwind CSS. Content lives in `src/data.ts` (projects and experience), `src/fun_data.ts` (personal collections), and `src/posts/` (project writeups).

## Development

```sh
bun install --frozen-lockfile
bun run dev
```

## Verify a change

```sh
bun run lint
bun run typecheck
bun run build
bun run test:smoke
```

The smoke test starts the production build on port 3100, then checks the homepage, project archive, project overview, and unknown-project 404. It also checks titles, page landmarks, headings, hidden-corner behavior, original snap transition, nonempty links, lazy image loading, and current biography copy.

Browser QA should cover narrow and wide screens, keyboard navigation, the three collection shelves, the gradual hidden-corner reveal, Back/Forward, and reduced-motion preferences.

## Framework versions

Latest stable npm releases verified on October 1, 2026: Next.js 16.3.8, React/React DOM 19.3.0, and Tailwind CSS 4.3.3. Tailwind uses its v4 PostCSS package and explicit legacy theme configuration so the existing palette and fonts stay intact. Supporting Tailwind plugins and class merging are upgraded for v4.

Tailwind v4 targets Safari 16.4+, Chrome 111+, and Firefox 128+.

## Content refresh

- Original page structure, slate/blue palette, monospace type, sticky identity column, and hidden dark-purple personal corner are restored from the live-site source
- The original 300vh gradient/smooth snap transition and scrollbar-hidden shelves are retained; cards keep desktop hover motion and add touch press feedback
- Biography reflects the public Bloomberg/New York announcement and USC computer science graduation, magna cum laude, in 2025
- Rig leads the selected projects; older experiments remain in the archive
- The USC Course Notifier article is a concise overview, replacing unfinished placeholder text
- Old live-demo links and the unverified résumé link are omitted; available public source links remain
- Personal collections preserve previously published favorites rather than guessing new tastes
- ofCourse and TroyLabs show known start dates only; end dates need confirmation before adding full ranges

Public sources used for the refresh:

- https://www.linkedin.com/in/brendonzimmer
- https://www.linkedin.com/posts/brendonzimmer_so-excited-to-share-that-i-graduated-magna-activity-7359748659736948737-Np-6
- https://github.com/b-relay/rig
- https://github.com/brendonzimmer/factor
- https://github.com/brendonzimmer/music-garage
- https://github.com/brendonzimmer/ftov/tree/bw
- https://github.com/brendonzimmer/concordance
- Previously published experience and collections at https://brendon.app

## Deployment

Use a Vercel **Preview** deployment for review. Production promotion is a separate approval; do not deploy to production or change the `brendon.app` domain as part of preview review.
