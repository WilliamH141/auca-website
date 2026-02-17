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
    image: "team/ben.png",
  },
  {
    name: "Joshua Little",
    role: "Vice President, Secretary & Engagement Officer",
    bio: "Coordinates weekly sessions, handles communications, and keeps the community engaged.",
    image: "team/josh.png",
  },
  {
    name: "Allen Li",
    role: "Vice President & Treasurer",
    bio: "Manages funding, equipment, and ensures resources are ready for every event.",
    image: "team/allen.png",
  },
  {
    name: "Kazmaire Bautista",
    role: "Marketing Lead",
    bio: "Drives club promotion, social media strategy, and brand visibility across campus.",
    image: "team/kaz.png",
  },

  // events Executives
  {
    name: "Omar Bukhari",
    role: "Events Executive",
    bio: "Supports tournament planning and helps coordinate weekly chess sessions.",
    image: "/team/omar.png",
  },
  {
    name: "Brian Liu",
    role: "Events Executive",
    bio: "Assists with event logistics and ensures smooth operations during tournaments.",
    image: "/team/brian.png",
  },
  {
    name: "Lucas Barnett-Harris",
    role: "Events Executive",
    bio: "Helps organise friendly matches and inter-university chess events.",
  },

  // marketing Executives
  {
    name: "Xavier Miller",
    role: "Marketing Executive",
    bio: "Creates content and manages social media to keep members informed and engaged.",
    image: "/team/xavier.png",
  },
  {
    name: "Eden Li",
    role: "Marketing Executive",
    bio: "Designs promotional materials and supports outreach campaigns across campus.",
    image: "team/eden.png",
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
    image: "team/william.png",
  },
  {
    name: "Felix Xie",
    role: "General Executive",
    bio: "Assists with event setup and helps maintain a welcoming club environment.",
    image: "/team/felix.png",
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
    image: "/team/mason.png",
  },
];
