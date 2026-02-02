import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "../components/Section";

export const metadata: Metadata = {
  title: "Sponsors | AUCA",
  description: "Meet the companies supporting the Auckland University Chess Association.",
};

const sponsors = [
  { name: "JS", logo: "/sponsors/js.png" },
  { name: "SIG", logo: "/sponsors/sig.png" },
];

export default function SponsorsPage() {
  return (
    <Section
      eyebrow="Support"
      title="Our Sponsors"
      description="Thanks to our sponsors for supporting AUCA and making our events possible."
    >
      <div className="flex flex-col items-center gap-12">
        {/* sponsors */}
        <div className="flex flex-wrap items-center justify-center gap-12">
          {sponsors.map((sponsor) => (
            <div key={sponsor.name} className="h-20 w-48 flex items-center justify-center">
              <img 
                src={sponsor.logo} 
                alt={sponsor.name} 
                className="max-h-20 max-w-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* become a sponsor button */}
        <Link
          href="mailto:aucklandunichess@gmail.com?subject=Sponsorship Inquiry for AUCA"
          className="inline-flex items-center justify-center rounded-full bg-sky-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-sky-200 transition hover:-translate-y-0.5 hover:bg-sky-700"
        >
          Become a Sponsor
        </Link>

        {/* why sponsor */}
        <div className="w-full max-w-2xl space-y-6 rounded-2xl border border-slate-200 bg-white/80 p-8">
          <h3 className="text-2xl font-bold text-slate-900 font-serif">Why Sponsor AUCA?</h3>
          <div className="grid gap-6">
            <div>
              <p className="text-sm font-semibold text-slate-900">Support Student Community</p>
              <p className="text-sm text-slate-600">Help us keep membership and events completely free so all students can enjoy chess regardless of their background.</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Build Campus Presence</p>
              <p className="text-sm text-slate-600">Connect with active chess players and students across the University of Auckland through our weekly sessions and tournaments.</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Enable Events</p>
              <p className="text-sm text-slate-600">Your support funds boards, clocks, prizes, and catering for our tournaments and social events throughout the year.</p>
            </div>
          </div>
          <p className="text-sm text-slate-600 border-t border-slate-200 pt-6">
            Interested in sponsoring AUCA? <Link href="mailto:aucklandunichess@gmail.com?subject=Sponsorship Inquiry for AUCA" className="font-semibold text-sky-600 hover:text-sky-700">Get in touch with us</Link> to discuss how we can work together.
          </p>
        </div>
      </div>
    </Section>
  );
}
