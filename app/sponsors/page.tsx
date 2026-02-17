import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "../components/Section";

export const metadata: Metadata = {
  title: "Sponsors | AUCA",
  description:
    "Meet the companies supporting the Auckland University Chess Association.",
};

const sponsors = [
  {
    name: "JS",
    logo: "/sponsors/js.png",
    url: "https://www.janestreet.com/",
  },
  { name: "SIG", logo: "/sponsors/sig.png", url: "https://sig.com/" },
  {
    name: "GONGCHA",
    logo: "/sponsors/gongcha.png",
    url: "https://www.gongcha.co.nz/web/",
    description: "Free topping with any drink.",
  },
  {
    name: "AKL Chess Academy",
    logo: "/sponsors/aklchessacademy.png",
    url: "https://www.aucklandchessacademy.com/",
    description: "10% off tournaments.",
  },
  { name: "HobbyCon", logo: "/sponsors/hobbycon.png", url: "https://hobbycon.co.nz/" },
  {
    name: "CakesLadders",
    logo: "/sponsors/cakesnladders.png",
    url: "https://cakesnladders.co.nz/",
    description:
      "$1 off per person per hour, 1–5pm Wed–Fri. Membership required.",
  },
];

const topSponsors = sponsors.slice(0, 3);
const bottomSponsors = sponsors.slice(3);

export default function SponsorsPage() {
  return (
    <Section
      eyebrow="Support"
      title="Our Sponsors"
      description="Thanks to our sponsors for supporting AUCA and helping make our events possible."
    >
      <div className="flex flex-col items-center gap-12">
        {/* sponsors */}
        <div className="flex w-full max-w-4xl flex-col items-center gap-8">
          <div className="flex flex-wrap items-center justify-center gap-12">
            {topSponsors.map((sponsor) => (
              <div key={sponsor.name} className="flex w-64 flex-col items-center gap-2">
                <Link
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-32 w-64 items-center justify-center rounded-2xl border border-transparent transition hover:-translate-y-0.5 hover:bg-slate-900/10 hover:shadow-md hover:shadow-black/10"
                  aria-label={`${sponsor.name} website`}
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-h-32 max-w-full object-contain"
                  />
                </Link>
                {sponsor.description && (
                  <p className="text-center text-xs text-slate-600">
                    {sponsor.description}
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {bottomSponsors.map((sponsor) => (
              <div key={sponsor.name} className="flex w-64 flex-col items-center gap-2">
                <Link
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-32 w-64 items-center justify-center rounded-2xl border border-transparent transition hover:-translate-y-0.5 hover:bg-slate-900/10 hover:shadow-md hover:shadow-black/10"
                  aria-label={`${sponsor.name} website`}
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-h-32 max-w-full object-contain"
                  />
                </Link>
                {sponsor.description && (
                  <p className="text-center text-xs text-slate-600">
                    {sponsor.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* become a sponsor button */}
        <Link
          href="mailto:aucklandunichess@gmail.com?subject=Sponsorship Inquiry for AUCA"
          className="inline-flex items-center justify-center rounded-full accent-bg px-8 py-4 text-sm font-semibold !text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-[color:var(--accent-strong)]"
        >
          Become a Sponsor
        </Link>

        {/* why sponsor */}
        <div className="w-full max-w-2xl space-y-6 rounded-2xl border thin-border bg-white/80 p-8 shadow-sm shadow-black/10 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20">
          <h3 className="text-2xl font-bold text-slate-900 font-serif">
            Why Sponsor AUCA?
          </h3>
          <div className="grid gap-6">
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Support Student Community
              </p>
              <p className="text-sm text-slate-600">
                Help us keep membership and events completely free so all
                students can enjoy chess regardless of their background.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Build Campus Presence
              </p>
              <p className="text-sm text-slate-600">
                Connect with active chess players and students across the
                University of Auckland through our weekly sessions and
                tournaments.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Enable Events
              </p>
              <p className="text-sm text-slate-600">
                Your support funds boards, clocks, prizes, and catering for our
                tournaments and social events throughout the year.
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-600 border-t thin-border pt-6">
            Interested in sponsoring AUCA?{" "}
            <Link
              href="mailto:aucklandunichess@gmail.com?subject=Sponsorship Inquiry for AUCA"
              className="font-semibold accent-text-strong accent-hover-text"
            >
              Get in touch with us
            </Link>{" "}
            to discuss how we can work together.
          </p>
        </div>
      </div>
    </Section>
  );
}
