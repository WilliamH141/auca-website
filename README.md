# AUCA Website

Official website for the Auckland University Chess Association. Built with Next.js and [Payload CMS](https://payloadcms.com), deployed on Vercel.

## Editing content (no code needed)

Log in at **https://auca.nz/admin** with the club admin account.

| What                                            | Where in the admin      |
| ----------------------------------------------- | ----------------------- |
| Events (incl. the weekly chess night location)  | Collections → Events    |
| Committee members and photos                    | Collections → Team      |
| Sponsors, logos and member perks                | Collections → Sponsors  |
| FAQ                                             | Collections → FAQ       |
| Rotating homepage photos                        | Globals → Homepage      |
| Club email, membership form, social media links | Globals → Site Settings |

Changes appear on the site as soon as you hit **Save**.

**Tips**

- **Events:** pick _One-off_ (with a date) or _Repeats weekly_ (with a day). Leave time or location blank to show "TBD" and hide the calendar button. Past one-off events move to "Past Events" automatically.
- **Ordering:** drag rows in the Team, Sponsors and FAQ lists to reorder them on the site. The first 3 sponsors go in the top row.
- **Photos:** upload any size; they are resized automatically.
- **New membership form each year?** Update it once in Site Settings and every Sign up button changes.

## Development

### Setup

Requires Node.js 20+.

```bash
git clone https://github.com/WilliamH141/auca-website.git
cd auca-website
npm install
npx vercel link          # log in with the club Vercel account, pick "aucklandunichess"
npx vercel env pull .env # downloads DATABASE_URL, BLOB_READ_WRITE_TOKEN, PAYLOAD_SECRET
npm run dev
```

Open http://localhost:3000 (site) and http://localhost:3000/admin (CMS). See `.env.example` for what each variable is.

> ⚠️ Local development uses the **live database**. Anything you create or delete in your local admin changes the real site.

### Changing the data structure (adding/changing fields or collections)

Auto-push is turned off, so schema changes must go through migrations:

1. Edit the config in `src/collections/` or `src/globals/`.
2. `npm run payload migrate:create <short-name>`: generates a migration in `src/migrations/`. Check the SQL looks right.
3. `npm run payload migrate`: applies it to the database.
4. `npm run generate:types` (and `npm run generate:importmap` if the admin UI changed).
5. Commit the migration files along with your changes. Vercel also runs any pending migrations when it deploys.

### Project structure

```
app/
├── (frontend)/       # The public website (pages + components)
└── (payload)/        # Payload admin panel and API (generated, don't edit)

src/
├── collections/      # CMS collections: Events, Team, Sponsors, FAQ, Media, Users
├── globals/          # CMS globals: Homepage, Site Settings
├── content/          # Functions the pages use to read CMS data
├── migrations/       # Database migrations
├── utils/            # Helpers (calendar links)
└── payload.config.ts # Payload setup (Postgres on Neon, images on Vercel Blob)
```

### Deployment

Push to `main` and Vercel deploys automatically. Pushing any other branch creates a preview deployment.
