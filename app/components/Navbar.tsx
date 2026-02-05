"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/team", label: "Team" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const buttonClass =
          "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--accent)]";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkClass = (href: string) =>
    `relative text-base font-medium text-slate-700 transition-colors hover:text-[color:var(--accent-strong)] ${
      pathname === href ? "text-slate-900 after:w-full" : ""
    } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[color:var(--accent)] after:transition-all after:duration-300 hover:after:w-full`;

  return (
    <header className="sticky top-0 z-40 border-b thin-border bg-[#ebf2fa] backdrop-blur shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-6 md:px-6 lg:px-0">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/output-onlinepngtools.png"
            alt="AUCA Logo"
            className="h-12 w-12 object-contain"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-semibold text-slate-900">AUCA</span>
            <span className="text-sm text-slate-600">Chess Association</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={linkClass(link.href)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/join"
            className={`${buttonClass} border thin-border accent-bg !text-white shadow-lg shadow-black/10 hover:bg-[color:var(--accent-strong)]`}
          >
            Join
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border thin-border bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 thin-border-hover hover:shadow md:hidden"
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
              />
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
                className={`${buttonClass} border thin-border accent-bg !text-white shadow-lg shadow-black/10 hover:bg-[color:var(--accent-strong)]`}
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
