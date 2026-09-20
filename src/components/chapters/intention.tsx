import { ChapterHeader, GridCards, Panel, Quote } from "@/components/ui/mark";
import { APP, SCALES } from "@/lib/system";

export function IntentionChapter() {
  return (
    <div className="space-y-10">
      <ChapterHeader
        num="01"
        kicker="Le document"
        title="Un système pour tenir la durée"
        lead="Ce document organise les décisions qui produisent les semaines : quel projet approfondir, comment préparer une séance, ce qui constitue un progrès, et quand modifier la répartition du travail."
      />

      <Quote>{APP.thesis}</Quote>

      <div>
        <h2 className="mb-4 font-display text-2xl font-medium tracking-tight">Trois échelles</h2>
        <GridCards>
          {SCALES.map((scale) => (
            <Panel key={scale.name}>
              <p className="font-mono text-[11px] tracking-widest text-muted uppercase">{scale.name}</p>
              <p className="mt-3 text-base leading-relaxed text-ink">{scale.question}</p>
              <p className="mt-3 text-sm text-muted">{scale.result}</p>
            </Panel>
          ))}
        </GridCards>
      </div>

      <Panel className="max-w-2xl">
        <p className="font-display text-xl font-medium tracking-tight">{APP.unit}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Les échéances sont des cibles de pilotage. Un jalon se franchit lorsque ses critères sont remplis ; sa date ne
          suffit pas à le valider. La référence initiale est septembre 2026. Si le démarrage se décale, les horizons se
          déplacent ensemble.
        </p>
      </Panel>
    </div>
  );
}
