# AUCA Website

Official website for the Auckland University Chess Association. Built with Next.js and deployed on Vercel.

## Prerequisites

- Node.js v18+ ([download here](https://nodejs.org))
- Git

Verify installation:
```bash
node -v
npm -v
```

## Getting Started

### First-time setup

```bash
git clone https://github.com/WilliamH141/auca-website.git
cd auca-website
npm install
```

### Development

```bash
npm run dev
```

Open http://localhost:3000 in your browser. The site will hot-reload on file changes.

## Content Management

### Events

Edit `src/content/events.ts` to add or update events. Follow the template provided in the file comments.

**Key notes:**
- Date format: `Month Day, Year` (e.g., "March 5, 2026")
- Time format: `HH:MM AM/PM - HH:MM AM/PM` (e.g., "5:30 PM - 8:30 PM")
- Use `TBD` for unconfirmed times or locations (calendar button will be hidden)
- For recurring events, use format like `Every Thursday`
- Descriptions are optional—omit for shorter event cards

### Team Members

Edit `src/content/team.ts` following the same template pattern.

### Other Content

- **Styling & Layout:** Check component files in `app/components/`
- **Images:** Place in `public/` directory (create subdirectories as needed)
- **Navigation:** Update links in `app/components/Footer.tsx`

Changes are visible immediately on refresh during development.

## Deployment

1. Commit and push changes to GitHub:
   ```bash
   git add .
   git commit -m "your commit message"
   git push
   ```

2. Vercel automatically deploys on push to `main`

3. Check deployment status at [vercel.com](https://vercel.com)

## Project Structure

```
app/
├── components/        # Reusable React components
├── (pages)/          # Page routes
└── globals.css       # Global styles

src/
├── content/          # Data files (events, team)
└── utils/            # Helper functions

public/              # Static images and assets
```

## Pages

- `/` – Homepage with upcoming events and club overview
- `/about` – About AUCA and our values
- `/events` – Full events calendar
- `/join` – Membership and joining instructions
- `/team` – Club leadership and team info
- `/sponsors` – Sponsor logos and information
- `/faq` – Frequently asked questions
- `/contact` – Contact information

## Formatting Guide

### Multi-line Locations

Use `\n` for line breaks in location strings:
```typescript
location: "Arts & Education Building\nRoom 201-342 · Level 3 Seminar Room"
```

### Event Descriptions

Keep descriptions concise (1-2 sentences):
```typescript
description: "Join us for the first chess night of the year. Meet the team and play casual games."
```

## Troubleshooting

**Build fails on deploy but works locally?**
- Check for TypeScript errors: `npm run build`
- Verify all event dates are properly formatted

**Events not showing?**
- Ensure the event date is in the future
- Check date format matches `Month Day, Year`

**Need to reset?**
```bash
npm install
npm run dev
```

## Support

For questions or issues, contact the AUCA development team or create an issue on GitHub.

---

Built with [Next.js](https://nextjs.org) · Hosted on [Vercel](https://vercel.com)
- `/about` About
- `/team` Team
- `/events` Events
- `/join` Join
- `/contact` Contact

## Troubleshooting

- Check Node.js: `node -v`
- Restart the terminal and try again
- Ask the dev team
