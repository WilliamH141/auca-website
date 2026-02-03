import { generateGoogleCalendarUrl } from "../utils/calendar";

export type Event = {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
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
//    - location: room/building name (e.g., "Kate Edger Commons, Level 0")
//    - description: brief 1-2 sentence summary of the event
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
    title: "Semester Welcome Blitz",
    date: "March 10, 2026",
    time: "6:00 PM - 8:30 PM",
    location: "University Quad, City Campus",
    description:
      "Kick off the semester with a friendly blitz tournament open to all levels.",
  },
  {
    title: "Weekly Casual Chess Night",
    date: "Every Wednesday",
    time: "5:30 PM - 7:30 PM",
    location: "Kate Edger Commons, Level 0",
    description:
      "Drop in to play casual games, learn new openings, and meet the community.",
  },
  {
    title: "Intervarsity Friendly",
    date: "April 6, 2026",
    time: "10:00 AM - 3:00 PM",
    location: "OGGB Case Room 2",
    description:
      "Teams from across NZ join AUCA for a day of rapid chess and collaboration.",
  },
  {
    title: "End-of-Semester Rapid",
    date: "June 15, 2026",
    time: "6:00 PM - 9:00 PM",
    location: "Engineering Building 401",
    description:
      "Celebrate the term with a rapid event featuring prizes and snacks.",
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
  addToCalendarUrl: generateGoogleCalendarUrl(
    event.title,
    event.date,
    event.time,
    event.location,
    event.description,
  ),
}));
