import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "../components/Card";
import { Section } from "../components/Section";

export const metadata: Metadata = {
  title: "Join | AUCA",
  description: "Join the Auckland University Chess Association for casual play, tournaments, and community events.",
};

const steps = [
  {
    title: "Become a member",
    description: "Sign up through the UoA clubs portal. It's free and helps us book rooms and stay connected.",
    action: { label: "Membership link", href: "#" },
  },
  {
    title: "Join Discord",
    description: "Get event reminders, find a playing partner, and share games for feedback.",
    action: { label: "Discord", href: "https://discord.gg/eMEKFnefNM" },
  },
  {
    title: "Follow Instagram",
    description: "See photos from tournaments and get quick updates about room changes.",
    action: { label: "Instagram", href: "https://instagram.com/uoachessassociation" },
  },
];

export default function JoinPage() {
  return (
    <Section
      eyebrow="Join AUCA"
      title="Ready to play?"
      description="Membership and all events are completely free. Join anytime—no fees, no catch."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step) => (
          <Card key={step.title} title={step.title} description={step.description}>
            {step.action && (
              <Link
                href={step.action.href}
                className="text-sm font-semibold text-sky-700 underline decoration-sky-200 underline-offset-4"
              >
                {step.action.label}
              </Link>
            )}
          </Card>
        ))}
      </div>
      <div className="mt-8 rounded-2xl border border-slate-200 bg-white/80 p-6 text-sm text-slate-700 shadow-sm">
        <p className="font-semibold text-slate-900">Accessibility and support</p>
        <p className="mt-2">Questions about joining? Email aucklandunichess@gmail.com or message us on Discord. We're here to help you get started—no barriers, no cost.</p>
      </div>
    </Section>
  );
}
