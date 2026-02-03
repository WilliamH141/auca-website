export function generateGoogleCalendarUrl(
  title: string,
  date: string,
  time: string,
  location: string,
  description: string,
): string {
  // parse date/time into start and end timestamps
  const startDateTime = parseEventDateTime(date, time);

  if (!startDateTime) {
    return "#";
  }

  const { start, end } = startDateTime;

  // google wants dates in YYYYMMDDTHHMMSS format
  const formatDate = (date: Date) => {
    return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  };

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates: `${formatDate(start)}/${formatDate(end)}`,
    details: description,
    location: location,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function generateOutlookCalendarUrl(
  title: string,
  date: string,
  time: string,
  location: string,
  description: string,
): string {
  const startDateTime = parseEventDateTime(date, time);

  if (!startDateTime) {
    return "#";
  }

  const { start, end } = startDateTime;

  const params = new URLSearchParams({
    path: "/calendar/action/compose",
    rru: "addevent",
    subject: title,
    startdt: start.toISOString(),
    enddt: end.toISOString(),
    body: description,
    location: location,
  });

  return `https://outlook.live.com/calendar/0/deeplink/compose?${params.toString()}`;
}

export function generateICSFile(
  title: string,
  date: string,
  time: string,
  location: string,
  description: string,
): string {
  const startDateTime = parseEventDateTime(date, time);

  if (!startDateTime) {
    return "";
  }

  const { start, end } = startDateTime;

  const formatDate = (date: Date) => {
    return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  };

  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//AUCA//Chess Events//EN",
    "BEGIN:VEVENT",
    `DTSTART:${formatDate(start)}`,
    `DTEND:${formatDate(end)}`,
    `SUMMARY:${title}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${location}`,
    `STATUS:CONFIRMED`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  return `data:text/calendar;charset=utf-8,${encodeURIComponent(icsContent)}`;
}

function parseEventDateTime(
  date: string,
  time: string,
): { start: Date; end: Date } | null {
  // handle "every wednesday" type recurring events
  if (date.toLowerCase().includes("every")) {
    // grab the next occurrence of that day
    const dayMatch = date.match(/every\s+(\w+)/i);
    if (dayMatch) {
      const nextDate = getNextWeekday(dayMatch[1]);
      return parseTimeToDate(nextDate, time);
    }
    return null;
  }

  // normal dates like "march 10, 2026"
  const eventDate = new Date(date);
  if (isNaN(eventDate.getTime())) {
    return null;
  }

  return parseTimeToDate(eventDate, time);
}

function parseTimeToDate(
  date: Date,
  time: string,
): { start: Date; end: Date } | null {
  // times like "6:00 PM - 8:30 PM"
  const timeMatch = time.match(
    /(\d{1,2}):(\d{2})\s*(AM|PM)\s*-\s*(\d{1,2}):(\d{2})\s*(AM|PM)/i,
  );

  if (!timeMatch) {
    return null;
  }

  const [_, startHour, startMin, startPeriod, endHour, endMin, endPeriod] =
    timeMatch;

  const start = new Date(date);
  start.setHours(
    convertTo24Hour(parseInt(startHour), startPeriod),
    parseInt(startMin),
    0,
    0,
  );

  const end = new Date(date);
  end.setHours(
    convertTo24Hour(parseInt(endHour), endPeriod),
    parseInt(endMin),
    0,
    0,
  );

  return { start, end };
}

function convertTo24Hour(hour: number, period: string): number {
  if (period.toUpperCase() === "PM" && hour !== 12) {
    return hour + 12;
  }
  if (period.toUpperCase() === "AM" && hour === 12) {
    return 0;
  }
  return hour;
}

function getNextWeekday(dayName: string): Date {
  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const targetDay = days.indexOf(dayName.toLowerCase());

  if (targetDay === -1) {
    return new Date();
  }

  const today = new Date();
  const currentDay = today.getDay();
  const daysUntilTarget = (targetDay - currentDay + 7) % 7 || 7;

  const nextDate = new Date(today);
  nextDate.setDate(today.getDate() + daysUntilTarget);

  return nextDate;
}
