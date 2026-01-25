import type { Metadata } from "next";
import { Card } from "../components/Card";
import { Section } from "../components/Section";

export const metadata: Metadata = {
  title: "About | AUCA",
  description: "Who we are, what we value, and how the Auckland University Chess Association supports students who love chess.",
};

const pillars = [
  {
    title: "Inclusive community",
    description: "We welcome complete beginners, casual players, and rated competitors. Everyone gets a game and a friendly intro.",
  },
  {
    title: "Student-led and simple",
    description: "Run by volunteers who balance study and play. We keep fees low and communication clear so anyone can join.",
  },
  {
    title: "Growth and wellbeing",
    description: "Chess is for focus and joy. We pair tournaments with relaxed sessions, making sure the club stays supportive.",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-14">
      <Section
        eyebrow="About AUCA"
        title="Chess that fits student life"
        description="Founded by University of Auckland students, AUCA exists to make chess easy to access on campus and online."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((item) => (
            <Card key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="What to expect"
        title="Sessions, tournaments, and support"
        description="We meet weekly during semester with special events sprinkled in between."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Card
            title="Weekly meetups"
            description="Casual games on campus with boards and clocks provided. We pair new members with friendly players right away."
          />
          <Card
            title="Learning and resources"
            description="Opening prep, tactics puzzles, and post-game analysis shared in Discord. We plan short workshops each term."
          />
          <Card
            title="Friendly tournaments"
            description="Rapid, blitz, and theme nights. Prizes focus on participation and improvement rather than just ratings."
          />
          <Card
            title="Collaborations"
            description="We love joint events with other clubs, faculties, and local chess groups. Email us to plan something new."
          />
        </div>
      </Section>
    </div>
  );
}
