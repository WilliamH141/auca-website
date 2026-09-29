import { revalidatePath } from "next/cache";
import type { CollectionConfig } from "payload";

const WEEKDAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// the calendar links parse this format, so enforce it at entry time
const TIME_RANGE = /^\d{1,2}:\d{2}\s*(AM|PM)\s*-\s*\d{1,2}:\d{2}\s*(AM|PM)$/i;

// pages that list events; rebuilt immediately whenever an event changes
function revalidateEventPages({
  context,
}: {
  context: Record<string, unknown>;
}) {
  if (context.disableRevalidate) return;
  revalidatePath("/");
  revalidatePath("/events");
}

export const Events: CollectionConfig = {
  slug: "events",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "schedule", "date", "weekday", "location"],
    description:
      "Events shown on the homepage and Events page. Past one-off events move to “Past Events” automatically.",
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [revalidateEventPages],
    afterDelete: [revalidateEventPages],
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "schedule",
      type: "radio",
      required: true,
      defaultValue: "once",
      options: [
        { label: "One-off event", value: "once" },
        { label: "Repeats weekly", value: "weekly" },
      ],
      admin: { layout: "horizontal" },
    },
    {
      name: "date",
      type: "date",
      admin: {
        condition: (_, siblingData) => siblingData?.schedule === "once",
        date: { pickerAppearance: "dayOnly", displayFormat: "d MMM yyyy" },
      },
      validate: (value: unknown, { siblingData }: { siblingData: unknown }) =>
        (siblingData as { schedule?: string })?.schedule !== "once" || value
          ? true
          : "A one-off event needs a date.",
    },
    {
      name: "weekday",
      type: "select",
      options: WEEKDAYS.map((day) => ({ label: day, value: day })),
      admin: {
        condition: (_, siblingData) => siblingData?.schedule === "weekly",
      },
      validate: (value: unknown, { siblingData }: { siblingData: unknown }) =>
        (siblingData as { schedule?: string })?.schedule !== "weekly" || value
          ? true
          : "A weekly event needs a day.",
    },
    {
      name: "time",
      type: "text",
      admin: {
        placeholder: "5:30 PM - 8:30 PM",
        description:
          "Start and end time, e.g. 5:30 PM - 8:30 PM. Leave blank if not confirmed yet (shows TBD).",
      },
      validate: (value: unknown) =>
        !value || TIME_RANGE.test(String(value).trim())
          ? true
          : "Use the format 5:30 PM - 8:30 PM.",
    },
    {
      name: "location",
      type: "textarea",
      admin: {
        placeholder: "The Conference Centre\nRoom 423-340 · Level 3",
        description:
          "Building on the first line, room on the second. Leave blank if not confirmed yet (shows TBD).",
      },
    },
    {
      name: "description",
      type: "textarea",
    },
    {
      name: "signUpUrl",
      label: "Sign-up link",
      type: "text",
      admin: {
        description: "Optional. Adds a “Sign up” button linking here.",
      },
      validate: (value: unknown) =>
        !value || /^https?:\/\//.test(String(value))
          ? true
          : "Must be a full link starting with https://",
    },
  ],
};
