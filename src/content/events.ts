export type Event = {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  addToCalendarUrl?: string;
};

export const events: Event[] = [
  {
    title: "Semester Welcome Blitz",
    date: "March 10, 2026",
    time: "6:00 PM - 8:30 PM",
    location: "University Quad, City Campus",
    description: "Kick off the semester with a friendly blitz tournament open to all levels.",
    addToCalendarUrl: "#",
  },
  {
    title: "Weekly Casual Chess Night",
    date: "Every Wednesday",
    time: "5:30 PM - 7:30 PM",
    location: "Kate Edger Commons, Level 0",
    description: "Drop in to play casual games, learn new openings, and meet the community.",
    addToCalendarUrl: "#",
  },
  {
    title: "Intervarsity Friendly",
    date: "April 6, 2026",
    time: "10:00 AM - 3:00 PM",
    location: "OGGB Case Room 2",
    description: "Teams from across NZ join AUCA for a day of rapid chess and collaboration.",
    addToCalendarUrl: "#",
  },
  {
    title: "End-of-Semester Rapid",
    date: "June 15, 2026",
    time: "6:00 PM - 9:00 PM",
    location: "Engineering Building 401",
    description: "Celebrate the term with a rapid event featuring prizes and snacks.",
    addToCalendarUrl: "#",
  },
];
