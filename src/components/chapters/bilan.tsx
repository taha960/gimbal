import { useEffect, useState } from "react";
import { ChapterHeader, Panel } from "@/components/ui/mark";
import { Button } from "@/components/ui/button";
import { REVIEW_FIELDS } from "@/lib/system";

const STORAGE_KEY = "atelier-bilan";

type Review = Record<(typeof REVIEW_FIELDS)[number]["key"], string>;

function emptyReview(): Review {
  return {
    contraintes: "",
    priorite: "",
    essai: "",
    musique: "",
    rustfx: "",
    libre: "",
    ajustement: "",
  };
}

function loadReview(): Review {
  if (typeof window === "undefined") return emptyReview();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyReview();
    return { ...emptyReview(), ...JSON.parse(raw) };
  } catch {
    return emptyReview();
  }
}

export function BilanChapter() {
  const [review, setReview] = useState<Review>(emptyReview);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setReview(loadReview());
  }, []);

  function save() {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(review));
    setSaved(true);
    window.setTimeout(() => setSaved(false), 1600);
  }

  return (
    <div className="space-y-10">
      <ChapterHeader
        num="09"
        kicker="Observer, décider, placer"
        title="Vingt minutes le dimanche, avant de répartir"
        lead="Regarder les traces plutôt que reconstituer toutes les heures. Une ligne par projet au bilan suffit. Ces catégories n’ont pas vocation à produire une note globale : elles aident à prendre une décision."
      />

      <ol className="grid gap-3 sm:grid-cols-2">
        {[
          { n: "01", t: "Observer", d: "Pour chaque projet : produit, compris, laissé ouvert." },
          { n: "02", t: "Décider", d: "Régime de la semaine suivante, un résultat principal par projet actif." },
          { n: "03", t: "Placer", d: "Séances lourdes, préparations indispensables, soirée libre. Laisser de la marge." },
          { n: "04", t: "Préparer", d: "Écrire le point de départ du premier bloc." },
        ].map((step) => (
          <li key={step.n} className="rounded-lg bg-paper px-5 py-4 shadow-[var(--shadow-border)]">
            <p className="font-mono text-[11px] text-faint">{step.n}</p>
            <p className="mt-1 font-medium">{step.t}</p>
            <p className="mt-1 text-sm text-muted">{step.d}</p>
          </li>
        ))}
      </ol>

      <Panel>
        <p className="font-display text-xl font-medium tracking-tight">Fiche de la semaine</p>
        <p className="mt-1 text-sm text-muted">Reste sur cet appareil. Rien n’est envoyé nulle part.</p>
        <form
          className="mt-6 grid gap-5"
          onSubmit={(e) => {
            e.preventDefault();
            save();
          }}
        >
          {REVIEW_FIELDS.map((field) => (
            <label key={field.key} className="grid gap-2">
              <span className="text-sm font-medium">{field.label}</span>
              <textarea
                value={review[field.key]}
                onChange={(e) => {
                  setReview((prev) => ({ ...prev, [field.key]: e.target.value }));
                  setSaved(false);
                }}
                rows={3}
                className="min-h-20 w-full resize-y rounded-md bg-bg px-3 py-3 text-sm leading-relaxed text-ink shadow-[var(--shadow-border)] placeholder:text-faint focus-visible:outline-none"
                placeholder="…"
              />
            </label>
          ))}
          <div className="flex items-center gap-3">
            <Button type="submit">Enregistrer la fiche</Button>
            {saved ? <p className="text-sm text-ok">Enregistrée</p> : null}
          </div>
        </form>
      </Panel>

      <Panel>
        <p className="font-medium">Revue mensuelle</p>
        <ol className="mt-3 grid gap-2 text-sm leading-relaxed text-muted">
          <li>Quel projet a reçu le plus de temps, lequel a occupé le plus d’attention ?</li>
          <li>Quelles transformations sont désormais visibles ?</li>
          <li>Quel projet coûte davantage à reprendre ?</li>
          <li>Les critères du prochain jalon se rapprochent-ils ?</li>
          <li>Quelle méthode produit peu malgré plusieurs essais ?</li>
          <li>Quel unique changement de répartition tester le mois suivant ?</li>
        </ol>
        <p className="mt-4 text-sm text-muted">
          Conserver les décisions qui fonctionnent assez longtemps pour observer leur effet. Changer tous les horaires
          chaque semaine rend le diagnostic difficile.
        </p>
      </Panel>
    </div>
  );
}
