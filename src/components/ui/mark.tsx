import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-xs font-medium tracking-[0.18em] text-muted uppercase">{children}</p>
  );
}

export function ChapterHeader({
  num,
  kicker,
  title,
  lead,
}: {
  num: string;
  kicker: string;
  title: string;
  lead?: string;
}) {
  return (
    <header className="mb-10 max-w-2xl">
      <Kicker>
        {num} · {kicker}
      </Kicker>
      <h1 className="mt-3 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">{title}</h1>
      {lead ? <p className="mt-5 text-lg leading-relaxed text-muted">{lead}</p> : null}
    </header>
  );
}

export function Panel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-lg bg-paper p-5 shadow-[var(--shadow-border)] sm:p-6", className)}>
      {children}
    </div>
  );
}

export function Quote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="border-l-2 border-pine pl-5 font-display text-xl font-medium leading-snug tracking-tight text-ink sm:text-2xl">
      {children}
    </blockquote>
  );
}

export function GridCards({ children }: { children: ReactNode }) {
  return <div className="grid gap-3 sm:grid-cols-3">{children}</div>;
}
