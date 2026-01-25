# Auckland University Chess Association (AUCA) website

Static Next.js site (App Router, TypeScript, Tailwind CSS) for the AUCA club. Content is kept in simple files so committee members can edit without a CMS.

## Run locally

1) Install dependencies: `npm install`
2) Start dev server: `npm run dev`
3) Visit http://localhost:3000

## Deploy (Vercel)

1) Create a new Vercel project and link this repo.
2) Framework preset: Next.js. No extra build settings needed.
3) Deploy. Production URL will match `metadataBase` in `app/layout.tsx` (update it if your domain differs).

## Editing content

- Events: edit `src/content/events.ts` (title, date, time, location, description, addToCalendarUrl).
- Committee: edit `src/content/team.ts` (name, role, bio).
- Social links and email: update `app/components/Footer.tsx` and relevant links in `app/contact/page.tsx` and `app/join/page.tsx`.
- Hero image: replace the URL passed to `backgroundImage` in `app/page.tsx` or drop a file into `public/hero.jpg` and change the value to `/hero.jpg`.
- Metadata: per-page titles/descriptions live beside each page component.

## Pages

- `/` Home: hero, what we do, upcoming events preview, contact teaser.
- `/about` About the club and pillars.
- `/team` Committee list from `src/content/team.ts`.
- `/events` Full event list from `src/content/events.ts`.
- `/join` Joining steps, membership link placeholder, Discord/Instagram.
- `/contact` Contact form UI (no backend) plus email and socials.

## Tech stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 (inline config)
- No database, no auth; fully static content

## Notes

- Replace placeholder links (`#`) for membership and calendar exports when ready.
- If you add remote images to the hero or cards, prefer optimized sizes; current hero uses an Unsplash placeholder.
