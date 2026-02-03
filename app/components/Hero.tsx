import Link from "next/link";

type HeroProps = {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export function Hero({
  title,
  subtitle,
  backgroundImage,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <section className="relative isolate overflow-hidden rounded-3xl bg-slate-900 text-white shadow-2xl shadow-slate-900/15">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            backgroundImage ||
            "url('https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-slate-950/70" />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200">
          Auckland University Chess Association
        </p>
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="max-w-2xl text-lg text-slate-100 sm:text-xl">
          {subtitle}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href={primaryCta.href}
            className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:-translate-y-0.5 hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            {primaryCta.label}
          </Link>
          <Link
            href={secondaryCta.href}
            className="inline-flex items-center justify-center rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/30 transition hover:-translate-y-0.5 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            {secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
