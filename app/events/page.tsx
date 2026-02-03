import type { Metadata } from "next";
import { Card } from "../components/Card";
import { CalendarPicker } from "../components/CalendarPicker";
import { Section } from "../components/Section";
import { events } from "../../src/content/events";

export const metadata: Metadata = {
  title: "Events | AUCA",
  description:
    "Upcoming Auckland University Chess Association events: casual sessions, tournaments, and collaborations.",
};

export default function EventsPage() {
  return (
    <Section
      eyebrow="Events"
      title="See you at the next session"
      description="All events are free. Times and rooms can shift during the semester—check our socials for updates."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {events.map((event) => (
          <Card
            key={event.title}
            title={event.title}
            description={event.description}
            meta={`${event.date} • ${event.time}`}
          >
            <p className="text-sm font-medium text-slate-700">
              {event.location}
            </p>
            <CalendarPicker
              title={event.title}
              date={event.date}
              time={event.time}
              location={event.location}
              description={event.description}
            />
          </Card>
        ))}
      </div>
    </Section>
  );
}
