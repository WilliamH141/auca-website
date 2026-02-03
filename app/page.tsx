import Link from "next/link";
import { Card } from "./components/Card";
import { Hero } from "./components/Hero";
import { Section } from "./components/Section";
import { events } from "../src/content/events";

export default function Home() {
  const featuredEvents = events.slice(0, 3);

  return (
    <div className="space-y-16">
      <Hero
        title="Chess for everyone at the University of Auckland"
        subtitle="Casual sessions, tournaments, and a friendly community that meets weekly on campus. Join us whether you are learning your first opening or prepping for your next big match."
        primaryCta={{ label: "Join AUCA", href: "/join" }}
        secondaryCta={{ label: "View Events", href: "/events" }}
        backgroundImages={[
          "/hero/aucasnapshot.png",
          "/hero/aucasnapshot2.png",
          "/hero/aucasnapshot3.png",
          "/hero/aucasnapshot4.png",
          "/hero/aucasnapshot5.png",
        ]}
        imageSwitchInterval={5000}
      />

      <Section
        eyebrow="What we do"
        title="A club for every kind of chess player"
        description="We keep things simple: regular casual meetups, friendly tournaments, and a supportive community of students who love the game."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <Card
            title="Casual Sessions"
            description="Drop in weekly to play, learn, and meet new players across all levels. Boards and clocks provided."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M5.5 3.5a2 2 0 0 1 3.52-1.28l1.34 1.63a2 2 0 0 1-.45 2.94L9 7.64V12a2 2 0 0 1-.59 1.41l-1.9 1.9a1 1 0 0 0-.29.71V18h10v-1.94a1 1 0 0 0-.29-.71l-1.9-1.9A2 2 0 0 1 13 12V7.64l-1.91-.85a2 2 0 0 1-.45-2.94l1.34-1.63A2 2 0 0 1 15.5 3.5 3.5 3.5 0 0 1 12 7a3.5 3.5 0 0 1-6.5 0Z" />
              </svg>
            }
          />
          <Card
            title="Tournaments"
            description="Rapid nights, blitz ladders, and friendlies with other universities. Friendly prizes and good vibes."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M6 4a1 1 0 0 0-1 1v2a5 5 0 0 0 6 4.9V15H8a1 1 0 0 0-1 1v2H6a1 1 0 0 0-1 1v1h14v-1a1 1 0 0 0-1-1h-1v-2a1 1 0 0 0-1-1h-3v-3.1A5 5 0 0 0 19 7V5a1 1 0 0 0-1-1Zm1 2h2v2.2A3 3 0 0 1 7 7Zm10 0v2a3 3 0 0 1-2-2.2V6Z" />
              </svg>
            }
          />
          <Card
            title="Community"
            description="Make friends, analyze games, and share resources through our Discord and Instagram updates."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M12 3a7 7 0 0 0-7 7v1H4a3 3 0 1 0 0 6h2v-7a6 6 0 1 1 12 0v7h2a3 3 0 1 0 0-6h-1v-1a7 7 0 0 0-7-7Zm-1 12.9a1 1 0 1 0 2 0V14a1 1 0 1 0-2 0Z" />
              </svg>
            }
          />
        </div>
      </Section>

      <Section
        eyebrow="Upcoming events"
        title="Mark your calendar"
        description="We publish events ahead of time so you can plan around exams and assignments."
        actionLabel="See all events"
        actionHref="/events"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {featuredEvents.map((event) => (
            <Card
              key={event.title}
              title={event.title}
              description={event.description}
              meta={`${event.date} • ${event.time}`}
            >
              <div className="text-sm font-medium text-slate-700">
                {event.location}
              </div>
              <Link
                href="/events"
                className="text-sm font-semibold text-sky-700 underline decoration-sky-200 underline-offset-4"
              >
                Add to calendar
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Contact"
        title="Say hello or ask about collabs"
        description="Email us or reach out on socials if you want to host a joint event, sponsor prizes, or just start playing."
        actionLabel="Contact page"
        actionHref="/contact"
      >
        <div className="glass-panel flex flex-col gap-4 rounded-2xl p-6">
          <div className="flex flex-col gap-2 text-slate-700 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-lg font-semibold text-slate-900">
                aucklandunichess@gmail.com
              </p>
              <p className="text-sm text-slate-600">
                We usually reply within a day during semester.
              </p>
            </div>
            <div className="flex gap-3 text-sm font-medium text-slate-700">
              <Link
                href="https://discord.gg/gA7Kudmfa2"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-200 px-4 py-2 transition hover:-translate-y-0.5 hover:border-sky-300"
              >
                Discord
              </Link>
              <Link
                href="https://instagram.com/uoachessassociation"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-200 px-4 py-2 transition hover:-translate-y-0.5 hover:border-sky-300"
              >
                Instagram
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
