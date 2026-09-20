import { useState } from "react";
import { ChapterHeader, Panel } from "@/components/ui/mark";
import { WEEK } from "@/lib/system";
import { cn } from "@/lib/utils";

export function SemaineChapter() {
  const [dayId, setDayId] = useState<(typeof WEEK)[number]["id"]>("mar");
  const day = WEEK.find((d) => d.id === dayId) ?? WEEK[1];

  return (
    <div className="space-y-10">
      <ChapterHeader
        num="04"
        kicker="Une géométrie soutenable"
        title="Trois matinées d’essai, deux d’harmonie, RustFX aux extrémités"
        lead="Environ 11 h 30 à 13 h 30 de travail principal, avant maintenance, préparation et instruments. L’enveloppe peut dépasser quinze heures. Deux semaines d’essai avant d’en faire une routine."
      />

      <div className="grid grid-cols-4 gap-1 sm:grid-cols-7 sm:gap-2">
        {WEEK.map((item) => {
          const selected = item.id === dayId;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setDayId(item.id)}
              className={cn(
                "flex h-20 flex-col items-start rounded-md px-2 py-2 text-left transition-colors duration-150 sm:h-28 sm:px-3 sm:py-3",
                selected ? "bg-pine text-pine-fg" : "bg-paper text-ink shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
              )}
            >
              <span className="font-mono text-xs tracking-widest uppercase opacity-70">{item.short}</span>
              <span className="mt-auto text-xs font-medium leading-tight sm:text-sm">{item.main}</span>
            </button>
          );
        })}
      </div>

      <Panel>
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="font-display text-2xl font-medium tracking-tight">{day.name}</h2>
          <p className="font-mono text-xs text-muted">{day.when}</p>
        </div>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{day.detail}</p>
        <ul className="mt-6 grid gap-2">
          {day.slots.map((slot) => (
            <li
              key={slot.band}
              className="grid grid-cols-1 gap-1 rounded-md bg-bg px-4 py-3 sm:grid-cols-[7rem_1fr] sm:items-baseline"
            >
              <span className="font-mono text-xs text-muted">{slot.band}</span>
              <span className="text-sm">{slot.label}</span>
            </li>
          ))}
        </ul>
      </Panel>

      <div className="grid gap-3 md:grid-cols-2">
        <Panel>
          <p className="font-medium">Vendredi soir reste libre</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            La séance du samedi se prépare le jeudi, ou à la fermeture du lundi. Le lundi matin reste disponible : la
            longue séance RustFX porte déjà la charge du jour.
          </p>
        </Panel>
        <Panel>
          <p className="font-medium">Dimanche — Lettera 32</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Deux à trois pages à la machine, à partir des notes de la semaine. En tête : le passage du POC concerné, et
            la relation — confirme, étend, complique, contredit. Scanner tout de suite, coller dans Obsidian, garder le
            scan.
          </p>
        </Panel>
      </div>
    </div>
  );
}
