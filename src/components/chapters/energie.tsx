import { useState } from "react";
import { ChapterHeader, Panel } from "@/components/ui/mark";
import { Button } from "@/components/ui/button";
import { ENERGY_LEVELS, OVERLOAD, PHENOMENA } from "@/lib/system";

export function EnergieChapter() {
  const [level, setLevel] = useState<(typeof ENERGY_LEVELS)[number]["id"]>("bonne");
  const current = ENERGY_LEVELS.find((e) => e.id === level) ?? ENERGY_LEVELS[0];

  return (
    <div className="space-y-10">
      <ChapterHeader
        num="07"
        kicker="Charge, fatigue, récupération"
        title="Un seul front personnel lourd par jour"
        lead="Le travail professionnel peut déjà avoir consommé une grande partie de la capacité. Choisir le type de séance selon l’énergie restante, pas selon la liste des envies."
      />

      <div>
        <h2 className="mb-4 font-display text-2xl font-medium tracking-tight">Quelle énergie aujourd’hui</h2>
        <div className="flex flex-col gap-2 sm:flex-row">
          {ENERGY_LEVELS.map((item) => (
            <Button
              key={item.id}
              variant={item.id === level ? "default" : "outline"}
              className="h-12 flex-1"
              onClick={() => setLevel(item.id)}
            >
              {item.label}
            </Button>
          ))}
        </div>
        <Panel className="mt-4">
          <p className="font-mono text-[11px] tracking-widest text-muted uppercase">Choix adapté</p>
          <p className="mt-3 font-display text-xl font-medium tracking-tight">{current.choice}</p>
        </Panel>
      </div>

      <div>
        <h2 className="mb-4 font-display text-2xl font-medium tracking-tight">Cinq phénomènes à ne pas confondre</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {PHENOMENA.map((item) => (
            <li key={item.name} className="rounded-lg bg-paper px-5 py-4 shadow-[var(--shadow-border)]">
              <p className="font-medium">{item.name}</p>
              <p className="mt-1 text-sm text-muted">{item.how}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
          Une idée utile hors séance se capture en une ligne. Si elle provoque sans cesse la réouverture du projet, la
          question devient celle de la charge mentale.
        </p>
      </div>

      <div>
        <h2 className="mb-4 font-display text-2xl font-medium tracking-tight">Signaux, décisions</h2>
        <ul className="grid gap-2">
          {OVERLOAD.map((item) => (
            <li
              key={item.signal}
              className="grid gap-1 rounded-lg bg-paper px-5 py-4 shadow-[var(--shadow-border)] md:grid-cols-2 md:gap-8"
            >
              <p className="text-sm">{item.signal}</p>
              <p className="text-sm text-muted">{item.action}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
