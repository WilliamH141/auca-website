import type { Metadata } from "next";
import { Section } from "../components/Section";

export const metadata: Metadata = {
  title: "FAQ | AUCA",
  description: "Frequently asked questions about the Auckland University Chess Association.",
};

const faqs = [
  {
    question: "Is membership free?",
    answer: "Absolutely! Membership and all our events are completely free. No hidden costs or surprises.",
  },
  {
    question: "Do I need to be good at chess?",
    answer: "Not at all! Beginners and experts are equally welcome. We're here to learn and have fun together.",
  },
  {
    question: "When and where do you meet?",
    answer: "We meet weekly during semester on City Campus. Check Discord or Instagram for the latest times and locations—they're updated regularly.",
  },
  {
    question: "How do I join?",
    answer: "It's easy! Sign up through the UoA Clubs portal, then jump into our Discord. That's it—you're in.",
  },
  {
    question: "What should I bring?",
    answer: "Just yourself and a willingness to have fun! We've got all the boards, clocks, and sets covered.",
  },
  {
    question: "Can I attend without signing up first?",
    answer: "Definitely! Come along to any session and check us out. You can sign up whenever you're ready.",
  },
  {
    question: "Do you run tournaments?",
    answer: "Yes! We run casual tournaments, blitz nights, and friendlies against other unis. There's something for everyone.",
  },
  {
    question: "How do I get updates?",
    answer: "Discord and Instagram both work great! Follow both for instant updates and announcements.",
  },
  {
    question: "Can non‑UoA students join?",
    answer: "Usually, yeah! Just give us a heads up in advance.",
  },
  {
    question: "How can I help or volunteer?",
    answer: "We'd love to have you help! Message the committee if you're interested in assisting with events, marketing, or anything else.",
  },
];

export default function FaqPage() {
  return (
    <Section
      eyebrow="FAQ"
      title="Frequently asked questions"
      description="Quick answers about membership, sessions, and events."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {faqs.map((faq) => (
          <div key={faq.question} className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">{faq.question}</h3>
            <p className="mt-2 text-sm text-slate-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
