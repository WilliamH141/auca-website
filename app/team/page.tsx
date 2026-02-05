import type { Metadata } from "next";
import { Card } from "../components/Card";
import { Section } from "../components/Section";
import { team } from "../../src/content/team";

export const metadata: Metadata = {
  title: "Team | AUCA",
  description:
    "Meet the student committee behind the Auckland University Chess Association.",
};

export default function TeamPage() {
  return (
    <Section
      eyebrow="Committee"
      title="Meet the team"
      description="The student volunteers keeping AUCA running smoothly."
    >
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
        {team.map((member) => (
          <div
            key={member.name}
            className="flex flex-col overflow-hidden rounded-2xl border thin-border bg-white/80 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative w-full bg-slate-100 pt-[100%]">
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-slate-400">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              )}
            </div>
            <div className="p-4 text-center">
              <h3 className="text-base font-semibold text-slate-900">
                {member.name}
              </h3>
              <p className="text-sm text-slate-600">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
