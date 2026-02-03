import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "../components/Section";

export const metadata: Metadata = {
  title: "Contact | AUCA",
  description:
    "Contact the Auckland University Chess Association for collabs, sponsorships, or general questions.",
};

export default function ContactPage() {
  const contacts = [
    {
      name: "Email",
      href: "mailto:aucklandunichess@gmail.com",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-12 w-12"
        >
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
    },
    {
      name: "Discord",
      href: "https://discord.gg/gA7Kudmfa2",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-12 w-12"
        >
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.444.864-.607 1.25a18.27 18.27 0 0 0-5.487 0c-.163-.386-.395-.875-.607-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.042-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.57 10.57 0 0 0 .372-.294.075.075 0 0 1 .078-.01c3.928 1.793 8.18 1.793 12.062 0a.075.075 0 0 1 .079.009c.12.098.246.198.373.295a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.359.698.77 1.364 1.225 1.994a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-4.718-.838-8.812-3.549-12.447a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-.965-2.157-2.156 0-1.193.955-2.157 2.157-2.157 1.211 0 2.176.964 2.157 2.157 0 1.19-.946 2.156-2.157 2.156zm7.975 0c-1.183 0-2.157-.965-2.157-2.156 0-1.193.955-2.157 2.157-2.157 1.211 0 2.176.964 2.157 2.157 0 1.19-.946 2.156-2.157 2.156z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://instagram.com/uoachessassociation",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-12 w-12"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/aucklandunichess/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-12 w-12"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
  ];

  return (
    <Section
      eyebrow="Contact"
      title="Get in touch"
      description="Reach out via email, Discord, Instagram, or Facebook. We reply quickly during semester."
    >
      <div className="flex flex-col items-center gap-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {contacts.map((contact) => (
            <Link
              key={contact.name}
              href={contact.href}
              target={contact.name !== "Email" ? "_blank" : undefined}
              rel={contact.name !== "Email" ? "noopener noreferrer" : undefined}
              className="flex flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-white/80 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:border-sky-300"
            >
              <div className="text-sky-700">{contact.icon}</div>
              <p className="text-lg font-semibold text-slate-900">
                {contact.name}
              </p>
            </Link>
          ))}
        </div>

        <div className="w-full max-w-2xl space-y-4 rounded-2xl border border-slate-200 bg-white/80 p-8 text-center">
          <p className="text-sm font-semibold text-slate-900">Direct Email</p>
          <p className="text-base text-slate-700">aucklandunichess@gmail.com</p>
          <p className="text-xs text-slate-600">
            We usually reply within a day during semester weeks.
          </p>
        </div>
      </div>
    </Section>
  );
}
