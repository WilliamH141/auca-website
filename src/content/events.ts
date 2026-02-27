import { generateGoogleCalendarUrl } from "../utils/calendar";

export type Event = {
  title: string;
  date: string;
  time: string;
  location: string;
  description?: string;
  addToCalendarUrl?: string;
};

// ========================================
// HOW TO ADD A NEW EVENT
// ========================================
// 1. Copy the event template below
// 2. Fill in the details:
//    - title: event name (e.g., "Blitz Tournament")
//    - date: use format "Month Day, Year" (e.g., "March 10, 2026")
//            OR "Every Weekday" for recurring (e.g., "Every Wednesday")
//    - time: use format "HH:MM AM/PM - HH:MM AM/PM" (e.g., "6:00 PM - 8:30 PM")
//            OR "TBD" if time not yet confirmed
//    - location: room/building name (e.g., "Kate Edger Commons, Level 0")
//                OR "TBD" if location not yet confirmed
//    - description: brief 1-2 sentence summary of the event
//    NOTE: Calendar button will be hidden if time or location is "TBD"
// 3. Add your new event to the eventData array below
// 4. Save the file - calendar links will be generated automatically!
//
// TEMPLATE TO COPY:
// {
//   title: "Event Name Here",
//   date: "Month Day, Year",
//   time: "6:00 PM - 8:30 PM",
//   location: "Building Name, Room Number",
//   description: "Brief description of what happens at this event.",
// },
// ========================================

const eventData: Omit<Event, "addToCalendarUrl">[] = [
  {
    title: "Opening Night",
    date: "March 5, 2026",
    time: "5:30 pm - 8:30 PM",
    location: "Arts & Education Building\nRoom 201-342 · Level 3 Seminar Room",
    description:
      "Join us for the first chess night of the year! Meet the team, play casual games, and kick off the semester together.",
  },
  {
    title: "Weekly Chess Night",
    date: "Every Thursday",
    time: "5:30 pm - 8:30 PM",
    location: "Arts & Education Building\nRoom 201-342 · Level 3 Seminar Room",
    description:
      "Drop in every Thursday to play chess, practice openings, and connect with the AUCA community.",
  },
  {
    title: "Rapid Tournament",
    date: "April 25, 2026",
    time: "TBD",
    location: "TBD",
    // description: "Fast-paced tournament with prizes and catering. Bring your A-game and compete for glory!",
  },
  {
    title: "Simultaneous Exhibition",
    date: "May 7, 2026",
    time: "5:30 PM - 8:30 PM",
    location: "TBD",
    // description: "Watch a strong player take on multiple opponents at once! Test your skills in this exciting simul where one player faces many boards simultaneously.",
  },
  {
    title: "ACCC Exchange - Away",
    date: "May 13, 2026",
    time: "6:30 PM - 9:00 PM",
    location: "Ellen Melville Centre\n2 Freyberg Place, Auckland CBD",
    description: "Visit Auckland Central Chess Club for a friendly 60+30 match. Play against their members and strengthen ties with the wider chess community.",
  },
  {
    title: "ACCC Exchange - Home",
    date: "May 21, 2026",
    time: "5:30 PM - 8:30 PM",
    location: "TBD",
    // description: "Host Auckland Central Chess Club at our venue. Welcome their players for an evening of friendly competition and community building.",
  },
  // EXAMPLE BELOW
  // {
  //   title: "Event Name Here",
  //   date: "Month Day, Year",
  //   time: "6:00 PM - 8:30 PM",
  //   location: "Building Name, Room Number",
  //   description: "Brief description of what happens at this event.",
  // },
];

// IMPORTANT!!!!!!!
// this automatically generates calendar links for all events above
// no need to touch this part!
// IMPORTANT!!!!!!!
export const events: Event[] = eventData.map((event) => ({
  ...event,
  addToCalendarUrl:
    event.time === "TBD" || event.location === "TBD"
      ? undefined
      : generateGoogleCalendarUrl(
          event.title,
          event.date,
          event.time,
          event.location,
          event.description || "",
        ),
}));
