# AUCA Website

Chess club website built with Next.js.

## 1. 📦 Prerequisites

Make sure you have the following installed:

- **Node.js v18 or later** (comes with npm)
- **Git**

### Install Node.js

Download here: [nodejs.org](https://nodejs.org)

After installing, open Terminal (Mac) or Command Prompt / PowerShell (Windows) and check:

```bash
node -v
npm -v
```

You should see version numbers. If not, restart your computer.

## 2. ⬇️ Clone the Repository

Open Terminal (Mac) or Command Prompt / PowerShell (Windows) and run:

```bash
git clone https://github.com/WilliamH141/auca-website.git
cd auca-website
```

## 3. 📥 Install Dependencies

```bash
npm install
```

This downloads all code libraries needed. Wait for it to finish.

## 4. 🚀 Run Locally

```bash
npm run dev
```

You should see:

```
> ready - started server on 0.0.0.0:3000
```

Open your browser and go to: **http://localhost:3000**

You should see the AUCA website.

## ✏️ Editing Content

**Events** — Open `src/content/events.ts` with any text editor. Add/edit events there.

**Team** — Open `src/content/team.ts`. Add/edit committee members.

**Images** — Drag your photos into the `public/` folder.

**Email/Links** — Open `app/components/Footer.tsx` and update URLs.

After editing, refresh your browser. Changes appear automatically.

## 🌐 Deploy (Go Live)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Connect your GitHub repo
4. Click Deploy
5. Your site is live

## 📋 Pages

- Home — `/`
- About — `/about`
- Team — `/team`
- Events — `/events`
- Join — `/join`
- Contact — `/contact`

## ❓ Stuck?

- Check Node.js is installed: `node -v`
- Restart Terminal and try again
- Ask the dev team
