import type { Metadata } from "next";
import { Card } from "../components/Card";
import { Section } from "../components/Section";
import { team } from "../../src/content/team";

export const metadata: Metadata = {
  title: "Team | AUCA",
  description: "Meet the student committee behind the Auckland University Chess Association.",
};

export default function TeamPage() {
  return (
    <Section
      eyebrow="Committee"
      title="Meet the team"
      description="The student volunteers keeping AUCA running smoothly. Reach out if you want to help or shadow a role."
    >
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        {team.map((member) => (
          <div key={member.name} className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="h-24 w-24 overflow-hidden rounded-full bg-slate-100">
              {member.image ? (
                <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-3xl font-bold text-slate-400">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
              )}
            </div>
            <div className="text-center">
              <h3 className="text-base font-semibold text-slate-900">{member.name}</h3>
              <p className="text-sm text-slate-600">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
