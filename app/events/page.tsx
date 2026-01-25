import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "../components/Card";
import { Section } from "../components/Section";
import { events } from "../../src/content/events";

export const metadata: Metadata = {
  title: "Events | AUCA",
  description: "Upcoming Auckland University Chess Association events: casual sessions, tournaments, and collaborations.",
};

export default function EventsPage() {
  return (
    <Section
      eyebrow="Events"
      title="See you at the next session"
      description="All events are free for members unless noted. Times and rooms may shift slightly during semester breaks—check Discord for latest updates."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {events.map((event) => (
          <Card
            key={event.title}
            title={event.title}
            description={event.description}
            meta={`${event.date} • ${event.time}`}
          >
            <p className="text-sm font-medium text-slate-700">{event.location}</p>
            <Link
              href={event.addToCalendarUrl || "#"}
              className="text-sm font-semibold text-sky-700 underline decoration-sky-200 underline-offset-4"
            >
              Add to calendar
            </Link>
          </Card>
        ))}
      </div>
    </Section>
  );
}
