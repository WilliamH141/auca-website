"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

type HeroProps = {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  backgroundImages?: string[];
  imageSwitchInterval?: number;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export function Hero({
  title,
  subtitle,
  backgroundImage,
  backgroundImages,
  imageSwitchInterval = 5000,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images =
    backgroundImages && backgroundImages.length > 0
      ? backgroundImages
      : backgroundImage
        ? [backgroundImage]
        : [
            "url('https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=1600&q=80')",
          ];

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, imageSwitchInterval);

    return () => clearInterval(interval);
  }, [images.length, imageSwitchInterval]);

  return (
    <section className="relative isolate overflow-hidden rounded-3xl bg-slate-900 text-white shadow-2xl shadow-slate-900/15">
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: image.startsWith("url(")
              ? image
              : `url('${image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: index === currentImageIndex ? 1 : 0,
            zIndex: index === currentImageIndex ? 1 : 0,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-slate-950/70" style={{ zIndex: 2 }} />
      <div
        className="relative z-10 mx-auto flex max-w-6xl flex-col gap-6 px-6 py-32 sm:px-10 sm:py-40 lg:px-16 lg:py-48"
        style={{ zIndex: 3 }}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-100 drop-shadow-sm">
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
            className="inline-flex items-center justify-center rounded-full accent-bg px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 ring-1 ring-black/10 transition hover:-translate-y-0.5 hover:bg-[color:var(--accent-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            {primaryCta.label}
          </Link>
          <Link
            href={secondaryCta.href}
            className="inline-flex items-center justify-center rounded-full bg-white/20 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/40 transition hover:-translate-y-0.5 hover:bg-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            {secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
