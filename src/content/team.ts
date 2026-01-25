export type CommitteeMember = {
  name: string;
  role: string;
  bio: string;
};

export const team: CommitteeMember[] = [
  {
    name: "Alex Taylor",
    role: "President",
    bio: "Sets the vision, leads partnerships, and ensures AUCA stays welcoming for all players.",
  },
  {
    name: "Jamie Lee",
    role: "Vice President",
    bio: "Coordinates weekly sessions and keeps events running smoothly with the team.",
  },
  {
    name: "Sam Morgan",
    role: "Treasurer",
    bio: "Manages membership, funding, and equipment so the boards are always ready.",
  },
  {
    name: "Priya Patel",
    role: "Events Lead",
    bio: "Designs tournaments, ladders, and special events to keep members improving.",
  },
  {
    name: "Chris Wang",
    role: "Communications",
    bio: "Shares updates across Discord, Instagram, and campus channels.",
  },
  {
    name: "Morgan Rivers",
    role: "Wellbeing & Inclusion",
    bio: "Ensures AUCA is supportive for new players, women, and non-binary members.",
  },
];
