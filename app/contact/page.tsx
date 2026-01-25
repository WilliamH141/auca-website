import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "../components/Section";

export const metadata: Metadata = {
  title: "Contact | AUCA",
  description: "Contact the Auckland University Chess Association for collabs, sponsorships, or general questions.",
};

export default function ContactPage() {
  return (
    <Section
      eyebrow="Contact"
      title="Let us know how we can help"
      description="We reply fastest via email or Discord. The form below is for quick notes—no backend needed."
    >
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="glass-panel rounded-2xl p-6 lg:col-span-2">
          <form className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
                Name
                <input
                  type="text"
                  placeholder="Your name"
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 shadow-sm focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-200"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
                Email
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 shadow-sm focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-200"
                />
              </label>
            </div>
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
              Message
              <textarea
                rows={5}
                placeholder="How can we help?"
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 shadow-sm focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-200"
              />
            </label>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500"
            >
              Send message (UI only)
            </button>
          </form>
        </div>

        <div className="space-y-4 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm">
          <div>
            <p className="text-sm font-semibold text-slate-900">Email</p>
            <p className="text-sm text-slate-700">contact@auca.nz</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Socials</p>
            <div className="mt-2 flex flex-col gap-2 text-sm font-medium text-slate-700">
              <Link href="https://discord.gg/example" className="transition hover:text-sky-700">
                Discord
              </Link>
              <Link href="https://instagram.com/auca" className="transition hover:text-sky-700">
                Instagram
              </Link>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Location</p>
            <p className="text-sm text-slate-700">University of Auckland, City Campus</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
