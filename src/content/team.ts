export type CommitteeMember = {
  name: string;
  role: string;
  bio: string;
  image?: string; // optional profile image path
};

export const team: CommitteeMember[] = [
  // admin Team
  {
    name: "Benjamin Guo",
    role: "President & Events Lead",
    bio: "Sets the vision, leads partnerships, and organizes tournaments to keep AUCA thriving.",
  },
  {
    name: "Joshua Little",
    role: "Vice President, Secretary & Engagement Officer",
    bio: "Coordinates weekly sessions, handles communications, and keeps the community engaged.",
  },
  {
    name: "Allen Li",
    role: "Vice President & Treasurer",
    bio: "Manages funding, equipment, and ensures resources are ready for every event.",
  },
  {
    name: "Kazmaire Bautista",
    role: "Marketing Lead",
    bio: "Drives club promotion, social media strategy, and brand visibility across campus.",
  },
  
  // events Executives
  {
    name: "Omar",
    role: "Events Executive",
    bio: "Supports tournament planning and helps coordinate weekly chess sessions.",
  },
  {
    name: "Brian Liu",
    role: "Events Executive",
    bio: "Assists with event logistics and ensures smooth operations during tournaments.",
  },
  {
    name: "Lucas Barnett-Harris",
    role: "Events Executive",
    bio: "Helps organize friendly matches and inter-university chess events.",
  },
  
  // marketing Executives
  {
    name: "Xavier Miller",
    role: "Marketing Executive",
    bio: "Creates content and manages social media to keep members informed and engaged.",
  },
  {
    name: "Eden Li",
    role: "Marketing Executive",
    bio: "Designs promotional materials and supports outreach campaigns across campus.",
  },
  {
    name: "Ernest Nel",
    role: "Marketing Executive",
    bio: "Manages online presence and helps grow AUCA's community through digital channels.",
  },
  
  // general Executives
  {
    name: "William Huang",
    role: "General Executive",
    bio: "Supports club operations and contributes to various initiatives across the team.",
  },
  {
    name: "Felix Xie",
    role: "General Executive",
    bio: "Assists with event setup and helps maintain a welcoming club environment.",
  },
  {
    name: "Rohit Mudaliar",
    role: "General Executive",
    bio: "Contributes to club activities and supports the committee's broader goals.",
  },
  {
    name: "Mason Ward",
    role: "General Executive",
    bio: "Helps coordinate logistics and ensures members have a great experience at events.",
  },
];
