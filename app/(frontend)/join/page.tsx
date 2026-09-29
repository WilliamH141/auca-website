import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "../components/Card";
import { Section } from "../components/Section";
import { getSiteSettings } from "@/src/content/settings";
import type { SiteSetting } from "@/src/payload-types";

export const metadata: Metadata = {
  title: "Join | AUCA",
  description:
    "Join the Auckland University Chess Association for casual play, tournaments, and community events.",
};

export const revalidate = 3600;

const getSteps = (settings: SiteSetting) => [
  {
    title: "Become a member",
    description:
      "Sign up through the UoA clubs portal. It's free and helps us book rooms and stay in touch.",
    action: {
      label: "Sign up",
      href: settings.membershipFormUrl,
    },
  },
  {
    title: "Join Discord",
    description:
      "Get event reminders, find a playing partner, and share games for feedback.",
    action: { label: "Join Discord", href: settings.discordUrl },
  },
  {
    title: "Follow Instagram",
    description:
      "See photos from tournaments and get quick updates about room changes.",
    action: {
      label: "Follow us",
      href: settings.instagramUrl,
    },
  },
  {
    title: "Join our Lichess team",
    description:
      "Play online games with club members and participate in team tournaments on Lichess.",
    action: {
      label: "Join team",
      href: settings.lichessUrl,
    },
  },
  {
    title: "Join our Chess.com club",
    description:
      "Connect with members on Chess.com for online matches, puzzles, and club events.",
    action: {
      label: "Join club",
      href: settings.chessComUrl,
    },
  },
];

export default async function JoinPage() {
  const settings = await getSiteSettings();
  const steps = getSteps(settings);

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
                className="inline-block cursor-pointer rounded-full accent-bg px-6 py-2.5 text-sm font-semibold text-white! shadow-sm transition hover:-translate-y-0.5 hover:bg-(--accent-strong)"
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
          Questions about joining? Email {settings.email} or message us on
          Discord. We're happy to help you get started.
        </p>
      </div>
    </Section>
  );
}
