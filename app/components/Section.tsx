import { ReactNode } from "react";
import Link from "next/link";

type SectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
  children: ReactNode;
};

export function Section({
  eyebrow,
  title,
  description,
  actionHref,
  actionLabel,
  children,
}: SectionProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-0">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl space-y-2">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] accent-text-strong">
              {eyebrow}
            </p>
          )}
          <h2 className="font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="text-base text-slate-600">{description}</p>
          )}
        </div>
        {actionHref && actionLabel && (
          <Link
            href={actionHref}
            className="inline-flex items-center justify-center rounded-lg border thin-border accent-bg px-4 py-2 text-sm font-semibold !text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[color:var(--accent-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--accent)]"
          >
            {actionLabel}
          </Link>
        )}
      </div>
      {children}
    </section>
  );
}
