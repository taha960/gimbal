import { useState } from "react";
import { ChapterHeader, Panel } from "@/components/ui/mark";
import { Button } from "@/components/ui/button";
import { AFTERNOON_STEPS, EVENING_FORMATS, SESSION_BEATS } from "@/lib/system";
import { cn } from "@/lib/utils";

export function JourneeChapter() {
  const [step, setStep] = useState(0);
  const current = AFTERNOON_STEPS[step];

  return (
    <div className="space-y-10">
      <ChapterHeader
        num="03"
        kicker="Préparer, approfondir, fermer"
        title="Le soir réduit les décisions du matin"
        lead="Réveil visé vers 6 h, bloc personnel vers 6 h 30–8 h lorsque la journée le permet. L’adoption est progressive : quelques matinées préparées, observer la fatigue, puis étendre."
      />

      <div className="grid gap-3 md:grid-cols-2">
        {EVENING_FORMATS.map((format) => (
          <Panel key={format.name}>
            <p className="font-medium">{format.name}</p>
            <p className="mt-1 font-mono text-xs text-muted">{format.duration}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{format.role}</p>
          </Panel>
        ))}
      </div>

      <div>
        <h2 className="mb-4 font-display text-2xl font-medium tracking-tight">Une séance de 90 minutes</h2>
        <ol className="grid gap-3">
          {SESSION_BEATS.map((beat, i) => (
            <li key={beat.name} className="grid grid-cols-[auto_1fr] gap-4 rounded-lg bg-paper p-4 shadow-[var(--shadow-border)] sm:p-5">
              <span className="font-mono text-sm tabular-nums text-faint">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-medium">{beat.name}</p>
                  <p className="font-mono text-xs text-muted">{beat.duration}</p>
                </div>
                <p className="mt-1 text-sm text-muted">{beat.action}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
          Si une lecture ou un débogage prend toute la séance, la fermeture reste nécessaire. Elle transforme un effort
          interrompu en travail reprenable.
        </p>
      </div>

      <div>
        <h2 className="mb-2 font-display text-2xl font-medium tracking-tight">La fenêtre de fin d’après-midi</h2>
        <p className="mb-5 max-w-2xl text-sm leading-relaxed text-muted">
          Sport le midi, creux vers 17 h, faim traitée trop tard, repas, scroll. Ce n’est pas un manque de volonté : un
          créneau sans forme se remplit du geste le plus facile, au moment où il reste le moins d’énergie pour en
          choisir un autre. Le levier : retirer la décision de ce moment-là.
        </p>

        <Panel>
          <div className="flex flex-wrap gap-2">
            {AFTERNOON_STEPS.map((item, i) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setStep(i)}
                className={cn(
                  "h-11 rounded-md px-3 font-mono text-xs tabular-nums transition-colors duration-150",
                  i === step ? "bg-pine text-pine-fg" : "bg-bg text-muted hover:text-ink",
                )}
              >
                {String(i + 1).padStart(2, "0")}
              </button>
            ))}
          </div>
          <p className="mt-6 font-display text-xl font-medium tracking-tight">{current.title}</p>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{current.body}</p>
          <div className="mt-6 flex gap-2">
            <Button variant="outline" disabled={step === 0} onClick={() => setStep((s) => Math.max(0, s - 1))}>
              Précédent
            </Button>
            <Button
              disabled={step === AFTERNOON_STEPS.length - 1}
              onClick={() => setStep((s) => Math.min(AFTERNOON_STEPS.length - 1, s + 1))}
            >
              Étape suivante
            </Button>
          </div>
        </Panel>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
          Un jour où ça échoue n’est pas une faute, c’est une donnée. Ne pas rater deux fois de suite. Protocole à
          l’essai deux semaines avant d’être considéré comme acquis.
        </p>
      </div>
    </div>
  );
}
