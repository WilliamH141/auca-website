import { ReactNode } from "react";

type CardProps = {
  title: string;
  description: string;
  icon?: ReactNode;
  meta?: string;
  children?: ReactNode;
};

export function Card({ title, description, icon, meta, children }: CardProps) {
  return (
    <div className="flex h-full flex-col gap-3 rounded-2xl border thin-border bg-white/80 p-6 shadow-sm shadow-black/10 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          {icon && <div className="accent-text-strong">{icon}</div>}
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        </div>
        {meta && (
          <span className="rounded-full accent-bg-soft px-3 py-1 text-xs font-medium accent-text-strong">
            {meta}
          </span>
        )}
      </div>
      <p className="text-sm text-slate-600">{description}</p>
      {children}
    </div>
  );
}
