import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { AreaSwitch } from "@/components/area-switch";
import { APP } from "@/lib/system";
import { cn } from "@/lib/utils";

const TRACKER_VIEWS = [
  { id: "semaine", label: "Semaine", to: "/suivi" as const },
  { id: "jalons", label: "Jalons", to: "/suivi/jalons" as const },
];

export function TrackerShell({
  view,
  children,
}: {
  view: "semaine" | "jalons";
  children: ReactNode;
}) {
  return (
    <div className="flex h-dvh min-h-dvh bg-bg text-ink">
      <aside className="sticky top-0 hidden h-dvh w-64 shrink-0 flex-col border-r border-line px-5 py-8 lg:flex">
        <div className="px-2">
          <p className="font-display text-2xl font-medium tracking-tight">{APP.name}</p>
          <p className="mt-1 font-mono text-xs tracking-widest text-muted uppercase">26 — 27</p>
        </div>
        <div className="mt-8">
          <AreaSwitch current="suivi" />
        </div>
        <nav className="mt-8 flex flex-1 flex-col gap-0.5" aria-label="Suivi">
          {TRACKER_VIEWS.map((item) => (
            <Link
              key={item.id}
              to={item.to}
              className={cn(
                "flex items-baseline gap-3 rounded-md px-2 py-2 text-sm font-medium transition-colors duration-150",
                view === item.id ? "bg-paper text-ink shadow-[var(--shadow-border)]" : "text-muted hover:bg-paper/70 hover:text-ink",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="px-2 font-mono text-xs leading-relaxed text-faint">
          Cibles, reste, jalons.
          <br />
          Rien n’est envoyé ailleurs.
        </p>
      </aside>

      <div className="flex h-dvh min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-20 border-b border-line bg-bg/90 backdrop-blur-sm lg:hidden">
          <div className="flex items-center justify-between gap-3 px-4 py-3">
            <div>
              <p className="font-display text-lg font-medium leading-none">{APP.name}</p>
              <p className="mt-1 font-mono text-xs text-muted">Suivi</p>
            </div>
            <div className="w-44">
              <AreaSwitch current="suivi" />
            </div>
          </div>
          <div className="flex gap-1 px-3 pb-3">
            {TRACKER_VIEWS.map((item) => (
              <Link
                key={item.id}
                to={item.to}
                className={cn(
                  "flex h-11 flex-1 items-center justify-center rounded-md text-sm font-medium transition-colors duration-150",
                  view === item.id ? "bg-pine text-pine-fg" : "bg-paper text-muted shadow-[var(--shadow-border)]",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </header>
        <main className="min-h-0 flex-1 overflow-y-auto">
          <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-8 sm:py-10">{children}</div>
        </main>
      </div>
    </div>
  );
}
