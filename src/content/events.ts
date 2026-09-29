import config from "@payload-config";
import { getPayload } from "payload";

// Events are edited in the Payload admin at /admin/collections/events.
// This file turns them into the display format the pages and calendar links use.

export type Event = {
  title: string;
  date: string;
  time: string;
  location: string;
  description?: string;
  signUpUrl?: string;
  canAddToCalendar?: boolean;
};

// dates are stored as timestamps; show them as the calendar day in nz
const dateFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: "Pacific/Auckland",
  month: "long",
  day: "numeric",
  year: "numeric",
});

function isEventPast(date: string): boolean {
  if (date.startsWith("Every")) return false;
  const parsed = new Date(date);
  if (isNaN(parsed.getTime())) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return parsed < today;
}

export async function getEvents() {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "events",
    pagination: false,
    sort: "date",
  });

  const events: Event[] = docs
    // weekly events first, then one-off events in date order
    .sort(
      (a, b) => Number(a.schedule === "once") - Number(b.schedule === "once"),
    )
    .map((doc) => {
      const time = doc.time?.trim() || "TBD";
      const location = doc.location?.trim() || "TBD";
      return {
        title: doc.title,
        date:
          doc.schedule === "weekly"
            ? `Every ${doc.weekday}`
            : dateFormatter.format(new Date(doc.date!)),
        time,
        location,
        description: doc.description || undefined,
        signUpUrl: doc.signUpUrl || undefined,
        // calendar button is hidden until both time and location are confirmed
        canAddToCalendar: time !== "TBD" && location !== "TBD",
      };
    });

  return {
    upcomingEvents: events.filter((e) => !isEventPast(e.date)),
    pastEvents: events.filter((e) => isEventPast(e.date)).reverse(),
  };
}
