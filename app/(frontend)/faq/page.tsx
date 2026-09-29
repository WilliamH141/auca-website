import type { Metadata } from "next";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { Section } from "../components/Section";
import { getFaqs } from "@/src/content/faqs";

export const metadata: Metadata = {
  title: "FAQ | AUCA",
  description:
    "Frequently asked questions about the Auckland University Chess Association.",
};

export const revalidate = 3600;

export default async function FaqPage() {
  const faqs = await getFaqs();

  return (
    <Section
      eyebrow="FAQ"
      title="Frequently asked questions"
      description="Quick answers about membership, sessions, and events."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="rounded-2xl border thin-border bg-white/80 p-6 shadow-sm shadow-black/10 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20"
          >
            <h3 className="text-base font-semibold text-slate-900">
              {faq.question}
            </h3>
            <RichText
              data={faq.answer}
              className="mt-2 space-y-2 text-sm text-slate-600 [&_a]:font-semibold [&_a]:text-(--accent-strong) [&_a]:underline"
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
