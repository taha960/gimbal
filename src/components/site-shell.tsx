import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, type ReactNode } from "react";
import { AreaSwitch } from "@/components/area-switch";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { APP, CHAPTERS, type ChapterId } from "@/lib/system";

type SiteShellProps = {
  chapterId: ChapterId;
  onChange: (id: ChapterId) => void;
  children: ReactNode;
};

export function SiteShell({ chapterId, onChange, children }: SiteShellProps) {
  const index = CHAPTERS.findIndex((c) => c.id === chapterId);
  const current = CHAPTERS[index] ?? CHAPTERS[0];
  const prev = index > 0 ? CHAPTERS[index - 1] : null;
  const next = index < CHAPTERS.length - 1 ? CHAPTERS[index + 1] : null;
  const scroller = useRef<HTMLElement>(null);

  useEffect(() => {
    scroller.current?.scrollTo({ top: 0 });
  }, [chapterId]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)) {
        return;
      }
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === "j") {
        if (next) onChange(next.id);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp" || e.key === "k") {
        if (prev) onChange(prev.id);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, onChange]);

  return (
    <div className="flex min-h-dvh bg-bg text-ink">
      <aside className="sticky top-0 hidden h-dvh w-64 shrink-0 flex-col border-r border-line px-5 py-8 lg:flex">
        <div className="px-2">
          <p className="font-display text-2xl font-medium tracking-tight">{APP.name}</p>
          <p className="mt-1 font-mono text-xs tracking-widest text-muted uppercase">26 — 27</p>
        </div>
        <div className="mt-8">
          <AreaSwitch current="document" />
        </div>
        <nav className="mt-8 flex flex-1 flex-col gap-0.5" aria-label="Chapitres">
          {CHAPTERS.map((chapter) => {
            const active = chapter.id === chapterId;
            return (
              <button
                key={chapter.id}
                type="button"
                onClick={() => onChange(chapter.id)}
                className={cn(
                  "flex items-baseline gap-3 rounded-md px-2 py-2 text-left transition-colors duration-150",
                  active ? "bg-paper text-ink shadow-[var(--shadow-border)]" : "text-muted hover:bg-paper/70 hover:text-ink",
                )}
              >
                <span className="font-mono text-[11px] tabular-nums text-faint">{chapter.num}</span>
                <span className="text-sm font-medium">{chapter.label}</span>
              </button>
            );
          })}
        </nav>
        <p className="px-2 font-mono text-[11px] leading-relaxed text-faint">
          Document directeur
          <br />
          Flèches ou J / K
        </p>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-20 border-b border-line bg-bg/90 backdrop-blur-sm lg:hidden">
          <div className="flex items-center justify-between gap-3 px-4 py-3">
            <div className="min-w-0">
              <p className="font-display text-lg font-medium leading-none">{APP.name}</p>
              <p className="mt-1 truncate font-mono text-xs text-muted">
                {current.num} · {current.label}
              </p>
            </div>
            <div className="w-44 shrink-0">
              <AreaSwitch current="document" />
            </div>
          </div>
          <div className="flex gap-1 overflow-x-auto px-3 pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {CHAPTERS.map((chapter) => (
              <button
                key={chapter.id}
                type="button"
                onClick={() => onChange(chapter.id)}
                className={cn(
                  "h-9 shrink-0 rounded-md px-3 font-mono text-[11px] tracking-wide transition-colors duration-150",
                  chapter.id === chapterId ? "bg-pine text-pine-fg" : "bg-paper text-muted shadow-[var(--shadow-border)]",
                )}
              >
                {chapter.num}
              </button>
            ))}
          </div>
        </header>

        <div className="h-px w-full bg-line">
          <div
            className="h-px bg-pine transition-[width] duration-200 ease-[var(--ease-out)]"
            style={{ width: `${((index + 1) / CHAPTERS.length) * 100}%` }}
          />
        </div>

        <main ref={scroller} className="min-h-0 flex-1 overflow-y-auto">
          <div className="mx-auto w-full max-w-4xl px-5 py-10 sm:px-8 sm:py-14 lg:px-12">{children}</div>

          <footer className="mx-auto flex w-full max-w-4xl items-center justify-between gap-4 px-5 pb-12 sm:px-8 lg:px-12">
            {prev ? (
              <Button variant="outline" onClick={() => onChange(prev.id)} className="min-h-11">
                <ChevronLeft className="size-4" />
                <span className="hidden sm:inline">{prev.label}</span>
                <span className="sm:hidden">Précédent</span>
              </Button>
            ) : (
              <span />
            )}
            <p className="font-mono text-[11px] tabular-nums text-faint">
              {current.num} / {CHAPTERS.length}
            </p>
            {next ? (
              <Button onClick={() => onChange(next.id)} className="min-h-11">
                <span className="hidden sm:inline">{next.label}</span>
                <span className="sm:hidden">Suivant</span>
                <ChevronRight className="size-4" />
              </Button>
            ) : (
              <span />
            )}
          </footer>
        </main>
      </div>
    </div>
  );
}
