# AUCA Website

Chess club website built with Next.js.

## Prerequisites

- Node.js v18 or later (includes npm)
- Git

Install Node.js from [nodejs.org](https://nodejs.org). Then verify:

```bash
node -v
npm -v
```

## Setup

```bash
git clone https://github.com/WilliamH141/auca-website.git
cd auca-website
npm install
```

## Run locally

```bash
npm run dev
```

Open http://localhost:3000

## Editing content

- Events: update `src/content/events.ts`
- Team: update `src/content/team.ts`
- Images: add files under `public/`
- Footer links: update `app/components/Footer.tsx`

Changes appear on refresh.

## Deploy

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import the repo and deploy

## Pages

- `/` Home
- `/about` About
- `/team` Team
- `/events` Events
- `/join` Join
- `/contact` Contact

## Troubleshooting

- Check Node.js: `node -v`
- Restart the terminal and try again
- Ask the dev team
