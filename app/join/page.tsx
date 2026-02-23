import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "../components/Card";
import { Section } from "../components/Section";

export const metadata: Metadata = {
  title: "Join | AUCA",
  description:
    "Join the Auckland University Chess Association for casual play, tournaments, and community events.",
};

const steps = [
  {
    title: "Become a member",
    description:
      "Sign up through the UoA clubs portal. It's free and helps us book rooms and stay in touch.",
    action: {
      label: "Sign up",
      href: "https://docs.google.com/forms/d/e/1FAIpQLSduh6LFhjscLG1kl_cAJOhIl5lIyS7W6NCfrMiiPmu3we5wWw/viewform",
    },
  },
  {
    title: "Join Discord",
    description:
      "Get event reminders, find a playing partner, and share games for feedback.",
    action: { label: "Join Discord", href: "https://discord.gg/gA7Kudmfa2" },
  },
  {
    title: "Follow Instagram",
    description:
      "See photos from tournaments and get quick updates about room changes.",
    action: {
      label: "Follow us",
      href: "https://instagram.com/uoachessassociation",
    },
  },
  {
    title: "Join our Lichess team",
    description:
      "Play online games with club members and participate in team tournaments on Lichess.",
    action: {
      label: "Join team",
      href: "https://lichess.org/team/auckland-university-chess-association-auca",
    },
  },
  {
    title: "Join our Chess.com club",
    description:
      "Connect with members on Chess.com for online matches, puzzles, and club events.",
    action: {
      label: "Join club",
      href: "https://www.chess.com/club/auckland-university-chess-association",
    },
  },
];

export default function JoinPage() {
  return (
    <Section
      eyebrow="Join AUCA"
      title="Ready to play?"
      description="Membership and all events are free. Join anytime—no fees, no pressure."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step) => (
          <Card
            key={step.title}
            title={step.title}
            description={step.description}
          >
            {step.action && (
              <Link
                href={step.action.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block cursor-pointer rounded-full accent-bg px-6 py-2.5 text-sm font-semibold !text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[color:var(--accent-strong)]"
              >
                {step.action.label}
              </Link>
            )}
          </Card>
        ))}
      </div>
      <div className="mt-8 rounded-2xl border thin-border bg-white/80 p-6 text-sm text-slate-700 shadow-sm shadow-black/10 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20">
        <p className="font-semibold text-slate-900">
          Accessibility and support
        </p>
        <p className="mt-2">
          Questions about joining? Email aucklandunichess@gmail.com or message
          us on Discord. We're happy to help you get started.
        </p>
      </div>
    </Section>
  );
}
