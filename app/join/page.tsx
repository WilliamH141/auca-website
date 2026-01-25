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
    description: "Sign up through the UoA clubs portal. Membership keeps events funded and lets us book rooms.",
    action: { label: "Membership link", href: "#" },
  },
  {
    title: "Join Discord",
    description: "Get event reminders, find a playing partner, and share games for feedback.",
    action: { label: "Discord", href: "https://discord.gg/example" },
  },
  {
    title: "Follow Instagram",
    description: "See photos from tournaments and get quick updates about room changes.",
    action: { label: "Instagram", href: "https://instagram.com/auca" },
  },
];

export default function JoinPage() {
  return (
    <Section
      eyebrow="Join AUCA"
      title="Ready to play?"
      description="Membership helps us cover boards, clocks, and snacks. Most events stay free thanks to your support."
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
        <p className="font-semibold text-slate-900">Concession and accessibility</p>
        <p className="mt-2">If membership cost is a barrier, email contact@auca.nz and we will sort out a concession or sponsorship. Everyone is welcome.</p>
      </div>
    </Section>
  );
}
