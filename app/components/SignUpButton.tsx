export function SignUpButton({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border thin-border accent-bg-soft px-3 py-1.5 text-sm font-semibold accent-text-strong shadow-sm shadow-black/10 transition thin-border-hover hover:bg-[color:var(--accent-strong)] hover:shadow-md hover:shadow-black/20 hover:brightness-97 active:brightness-85"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        className="h-4 w-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h6m-6 4h6M9 8h6M5 4h14v16H5z"
        />
      </svg>
      Sign up
    </a>
  );
}
