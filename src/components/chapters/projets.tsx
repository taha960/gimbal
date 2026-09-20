import { useState } from "react";
import { ChapterHeader, Panel } from "@/components/ui/mark";
import { Button } from "@/components/ui/button";
import { INSUFFICIENCIES, PROJECTS } from "@/lib/system";

export function ProjetsChapter() {
  const [active, setActive] = useState<(typeof PROJECTS)[number]["id"]>("essai");
  const project = PROJECTS.find((p) => p.id === active) ?? PROJECTS[0];

  return (
    <div className="space-y-10">
      <ChapterHeader
        num="02"
        kicker="Trois formes de progrès"
        title="Les projets ne sont pas interchangeables"
        lead="Ils partagent une méthode de continuité. Leurs résultats, non. Une séance vaut par la transformation obtenue — une compréhension formulée, un geste devenu disponible, une voie fragile éliminée."
      />

      <div className="flex flex-col gap-2 sm:flex-row">
        {PROJECTS.map((item) => (
          <Button
            key={item.id}
            type="button"
            variant={item.id === active ? "default" : "outline"}
            className="h-12 flex-1"
            onClick={() => setActive(item.id)}
          >
            {item.short}
          </Button>
        ))}
      </div>

      <Panel>
        <p className="font-mono text-[11px] tracking-widest text-muted uppercase">{project.name}</p>
        <p className="mt-3 font-display text-2xl font-medium tracking-tight">{project.arc}</p>
        <p className="mt-2 text-sm text-muted">Preuve : {project.proof}</p>
        <p className="mt-5 max-w-2xl text-base leading-relaxed">{project.method}</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {project.objects.map((object) => (
            <li key={object.name} className="rounded-md bg-bg px-4 py-3">
              <p className="text-sm font-medium">{object.name}</p>
              <p className="mt-1 text-sm text-muted">{object.focus}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">{project.note}</p>
      </Panel>

      {active === "essai" ? (
        <div>
          <h2 className="mb-4 font-display text-2xl font-medium tracking-tight">Trois insuffisances, trois gestes</h2>
          <p className="mb-4 max-w-2xl text-sm leading-relaxed text-muted">
            La distinction évite de répondre à tout par davantage de lecture.
          </p>
          <div className="grid gap-3 md:grid-cols-3">
            {INSUFFICIENCIES.map((item) => (
              <Panel key={item.name}>
                <p className="font-medium">{item.name}</p>
                <p className="mt-2 text-sm text-muted">{item.diagnosis}</p>
                <p className="mt-3 text-sm text-ink">{item.action}</p>
              </Panel>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
