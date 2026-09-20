import { ChapterHeader, Panel, Quote } from "@/components/ui/mark";
import { RULES, SIGNALS } from "@/lib/system";

export function ReglesChapter() {
  return (
    <div className="space-y-10">
      <ChapterHeader
        num="10"
        kicker="Les règles fondamentales"
        title="Le système en une page"
        lead="Matin et soir, structure hebdomadaire, trois parcours, jalons, et les signaux qui demandent un ajustement."
      />

      <Quote>Le soir prépare. Le matin porte. La séance se ferme par un NEXT.</Quote>

      <div className="grid gap-3 md:grid-cols-3">
        <Panel>
          <p className="font-mono text-[11px] tracking-widest text-muted uppercase">Essai</p>
          <p className="mt-2 font-display text-lg font-medium tracking-tight">Comprendre → argumenter → écrire</p>
          <p className="mt-2 text-sm text-muted">Trois matinées possibles, dont le dimanche.</p>
        </Panel>
        <Panel>
          <p className="font-mono text-[11px] tracking-widest text-muted uppercase">Musique</p>
          <p className="mt-2 font-display text-lg font-medium tracking-tight">Comprendre → entendre → jouer → créer</p>
          <p className="mt-2 text-sm text-muted">Deux matinées d’harmonie, applications en soirée.</p>
        </Panel>
        <Panel>
          <p className="font-mono text-[11px] tracking-widest text-muted uppercase">RustFX</p>
          <p className="mt-2 font-display text-lg font-medium tracking-tight">Expérimenter → développer → intégrer</p>
          <p className="mt-2 text-sm text-muted">Lundi dès 16 h, samedi matin, entretien court.</p>
        </Panel>
      </div>

      <div>
        <h2 className="mb-4 font-display text-2xl font-medium tracking-tight">Règles</h2>
        <ol className="grid gap-2">
          {RULES.map((rule, i) => (
            <li key={rule} className="grid grid-cols-[auto_1fr] gap-4 rounded-lg bg-paper px-5 py-4 shadow-[var(--shadow-border)]">
              <span className="font-mono text-xs tabular-nums text-faint">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-sm leading-relaxed">{rule}</span>
            </li>
          ))}
        </ol>
      </div>

      <div>
        <h2 className="mb-4 font-display text-2xl font-medium tracking-tight">Signaux d’ajustement</h2>
        <ul className="flex flex-wrap gap-2">
          {SIGNALS.map((signal) => (
            <li
              key={signal}
              className="rounded-md bg-paper px-4 py-2 text-sm text-ink shadow-[var(--shadow-border)]"
            >
              {signal}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">
          Une soirée entièrement libre, et de la marge. Le troisième bloc d’essai est ajustable. Les jours peuvent
          changer selon les contraintes. Ce qui ne change pas : une question par séance, une trace, un NEXT.
        </p>
      </div>
    </div>
  );
}
