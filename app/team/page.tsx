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
      <div className="grid gap-6 md:grid-cols-2">
        {team.map((member) => (
          <Card key={member.name} title={member.name} description={member.bio} meta={member.role}>
            <div className="text-sm text-slate-600">Contact: contact@auca.nz</div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
