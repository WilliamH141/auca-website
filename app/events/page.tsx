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
            <div className="flex items-start gap-1.5 text-sm font-medium text-slate-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4 text-slate-500 mt-0.5"
              >
                <path
                  fillRule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="whitespace-pre-line">{event.location}</span>
            </div>
            {event.addToCalendarUrl && (
              <CalendarPicker
                title={event.title}
                date={event.date}
                time={event.time}
                location={event.location}
                description={event.description}
              />
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}
