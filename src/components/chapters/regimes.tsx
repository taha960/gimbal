import { ChapterHeader, Panel } from "@/components/ui/mark";
import { REGIMES } from "@/lib/system";

export function RegimesChapter() {
  return (
    <div className="space-y-10">
      <ChapterHeader
        num="06"
        kicker="Choisir l’intensité"
        title="L’équilibre se juge sur plusieurs semaines"
        lead="Une semaine consacrée davantage à l’essai peut être cohérente, à condition de connaître son objectif et de préparer la continuité des autres. La continuité, c’est la facilité de reprise — elle peut tenir en maintenance et se perdre dans une semaine chargée sans trace."
      />

      <div className="grid gap-3">
        {REGIMES.map((regime, i) => (
          <Panel key={regime.name} className="grid gap-4 sm:grid-cols-[8rem_1fr_1fr]">
            <div>
              <p className="font-mono text-[11px] tabular-nums text-faint">{String(i + 1).padStart(2, "0")}</p>
              <p className="mt-1 font-display text-xl font-medium tracking-tight">{regime.name}</p>
            </div>
            <div>
              <p className="font-mono text-[11px] tracking-widest text-muted uppercase">Fonction</p>
              <p className="mt-1 text-sm leading-relaxed">{regime.role}</p>
              <p className="mt-2 text-sm text-muted">{regime.commit}</p>
            </div>
            <div>
              <p className="font-mono text-[11px] tracking-widest text-muted uppercase">Sortie</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{regime.exit}</p>
            </div>
          </Panel>
        ))}
      </div>

      <Panel>
        <p className="font-medium">Démarrage proposé</p>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          Deux semaines de sprint POC, musique en continuité, RustFX au niveau compatible avec l’assemblage. À la fin
          de cette fenêtre : figer le POC, examiner la charge réellement supportée, revenir à la géométrie normale.
          Toute séance empruntée à un autre projet a une date de restitution.
        </p>
      </Panel>
    </div>
  );
}
