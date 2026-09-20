import { ChapterHeader, Panel } from "@/components/ui/mark";
import { MILESTONES, YEAR_PHASES } from "@/lib/system";

export function JalonsChapter() {
  return (
    <div className="space-y-10">
      <ChapterHeader
        num="08"
        kicker="Un an de trajectoire"
        title="Les jalons se valident par leurs résultats"
        lead="Après quelques passes, estimer le rythme réel. Si un chapitre exige beaucoup plus de séances que prévu, modifier le périmètre ou la date — pas le critère de qualité."
      />

      <div className="grid gap-4">
        {MILESTONES.map((mile) => (
          <Panel key={mile.horizon}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="font-display text-2xl font-medium tracking-tight">{mile.horizon}</p>
              <p className="font-mono text-xs text-muted">{mile.when}</p>
            </div>
            <ul className="mt-5 grid gap-4">
              {mile.items.map((item) => (
                <li key={item.project} className="grid gap-1 border-t border-line pt-4 first:border-t-0 first:pt-0 md:grid-cols-[8rem_1fr]">
                  <p className="font-mono text-xs tracking-widest text-muted uppercase">{item.project}</p>
                  <div>
                    <p className="text-sm font-medium">{item.level}</p>
                    <p className="mt-1 text-sm text-muted">{item.test}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Panel>
        ))}
      </div>

      <div>
        <h2 className="mb-4 font-display text-2xl font-medium tracking-tight">La trajectoire</h2>
        <div className="grid gap-3">
          {YEAR_PHASES.map((phase) => (
            <Panel key={phase.period}>
              <p className="font-medium">{phase.period}</p>
              <dl className="mt-4 grid gap-3 sm:grid-cols-3">
                <div>
                  <dt className="font-mono text-xs tracking-widest text-muted uppercase">Essai</dt>
                  <dd className="mt-1 text-sm leading-relaxed">{phase.essai}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs tracking-widest text-muted uppercase">Musique</dt>
                  <dd className="mt-1 text-sm leading-relaxed">{phase.musique}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs tracking-widest text-muted uppercase">RustFX</dt>
                  <dd className="mt-1 text-sm leading-relaxed">{phase.rustfx}</dd>
                </div>
              </dl>
            </Panel>
          ))}
        </div>
        <p className="mt-4 max-w-2xl text-sm text-muted">
          Nous sommes en septembre 2026 : fenêtre de sprint POC. Musique en continuité, RustFX au niveau compatible
          avec l’assemblage.
        </p>
      </div>
    </div>
  );
}
