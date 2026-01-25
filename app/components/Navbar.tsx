"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

const buttonClass =
  "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkClass = (href: string) =>
    `text-sm font-medium transition hover:text-sky-600 ${
      pathname === href ? "text-sky-700" : "text-slate-600"
    }`;

  return (
    <header className="sticky top-0 z-30 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 md:px-6 lg:px-0">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-600 text-white shadow-lg">
            <span className="text-lg font-bold">AU</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-base font-semibold text-slate-900">AUCA</span>
            <span className="text-xs text-slate-600">Chess Association</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass(link.href)}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/join"
            className={`${buttonClass} bg-sky-600 text-white shadow-lg shadow-sky-200 hover:bg-sky-700`}
          >
            Join
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow md:hidden"
        >
          <span className="sr-only">Toggle navigation</span>
          <svg
            aria-hidden
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="mx-auto mb-4 max-w-6xl px-4 md:hidden">
          <div className="glass-panel rounded-2xl p-4">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${linkClass(link.href)} rounded-xl px-3 py-2 hover:bg-slate-50`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/join"
                className={`${buttonClass} bg-sky-600 text-white shadow-lg shadow-sky-200 hover:bg-sky-700`}
                onClick={() => setOpen(false)}
              >
                Join AUCA
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
