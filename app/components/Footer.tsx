import Link from "next/link";

const socials = [
  { label: "Instagram", href: "https://instagram.com/uoachessassociation" },
  { label: "Discord", href: "https://discord.gg/eMEKFnefNM" },
  { label: "Email", href: "mailto:contact@auca.nz" },
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 md:px-6 lg:px-0">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold text-slate-900">Auckland University Chess Association</p>
            <p className="text-sm text-slate-600">Building a welcoming chess community at the University of Auckland.</p>
          </div>
          <div className="flex items-center gap-4 text-sm font-medium text-slate-700">
            {socials.map((item) => (
              <Link key={item.label} href={item.href} className="transition hover:text-sky-700">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} AUCA. All rights reserved.</p>
          <p>Made with Next.js + Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
