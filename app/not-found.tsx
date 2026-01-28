import Link from "next/link";

export default function NotFound() {
  const buttonClass =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400";

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 py-12">
      <div className="text-center space-y-4">
        <div className="text-7xl font-bold text-slate-900">404</div>
        <h1 className="text-4xl font-bold text-slate-900 font-serif">Illegal Move</h1>
        <p className="text-lg text-slate-600 max-w-md">
          That square doesn't exist on this board. Let's get you back into the game.
        </p>
      </div>
      <div className="flex flex-col gap-3 pt-4 sm:flex-row">
        <Link
          href="/"
          className={`${buttonClass} bg-sky-600 text-white shadow-lg shadow-sky-200 hover:bg-sky-700`}
        >
          Home
        </Link>
        <Link
          href="/events"
          className={`${buttonClass} border border-slate-200 text-slate-700 hover:border-sky-300`}
        >
          Events
        </Link>
      </div>
    </div>
  );
}
