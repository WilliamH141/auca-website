export type CommitteeMember = {
  name: string;
  role: string;
  image?: string; // optional profile image path
};

export const team: CommitteeMember[] = [
  // admin Team
  {
    name: "Benjamin Guo",
    role: "President & Events Lead",
    image: "/team/ben.png",
  },
  {
    name: "Joshua Little",
    role: "Vice President, Secretary & Engagement Officer",
    image: "/team/josh.png",
  },
  {
    name: "Allen Li",
    role: "Vice President & Treasurer",
    image: "/team/allen.png",
  },
  {
    name: "Kazmaire Bautista",
    role: "Marketing Lead",
    image: "/team/kaz.png",
  },

  // events Executives
  {
    name: "Omar Bukhari",
    role: "Events Executive",
    image: "/team/omar.png",
  },
  {
    name: "Brian Liu",
    role: "Events Executive",
    image: "/team/brian.png",
  },
  {
    name: "Lucas Barnett-Harris",
    role: "Events Executive",
    image: "/team/lucas.png",
  },

  // marketing Executives
  {
    name: "Xavier Miller",
    role: "Marketing Executive",
    image: "/team/xavier.png",
  },
  {
    name: "Eden Li",
    role: "Marketing Executive",
    image: "/team/eden.png",
  },
  {
    name: "Jhon Borja",
    role: "Marketing Executive",
    image: "/team/jhon.png",
  },
  {
    name: "Nikki Kermani",
    role: "Marketing Executive",
    image: "/team/nikki.png",
  },

  // general Executives
  {
    name: "William Huang",
    role: "General Executive",
    image: "/team/william.png",
  },
  {
    name: "Felix Xie",
    role: "General Executive",
    image: "/team/felix.png",
  },
  {
    name: "Rohit Mudaliar",
    role: "General Executive",
    image: "/team/rohit.png",
  },
  {
    name: "Mason Ward",
    role: "General Executive",
    image: "/team/mason.png",
  },
];
