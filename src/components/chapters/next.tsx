import { useState } from "react";
import { ChapterHeader, Panel, Quote } from "@/components/ui/mark";
import { Button } from "@/components/ui/button";
import { NEXT_EXAMPLES, NEXT_FIELDS, PROJECTS } from "@/lib/system";

export function NextChapter() {
  const [projectId, setProjectId] = useState<(typeof NEXT_EXAMPLES)[number]["project"]>("essai");
  const example = NEXT_EXAMPLES.find((e) => e.project === projectId) ?? NEXT_EXAMPLES[0];
  const project = PROJECTS.find((p) => p.id === projectId);

  return (
    <div className="space-y-10">
      <ChapterHeader
        num="05"
        kicker="Le mécanisme de reprise"
        title="Cinq lignes, pas une page"
        lead="Chaque séance importante se termine ainsi. Un bon NEXT contient un verbe, un objet, et un critère d’arrêt. « Continuer le chapitre » ne donne pas assez d’information pour redémarrer."
      />

      <Quote>Fermer porte sur la question posée ce matin — pas sur le projet entier.</Quote>

      <p className="max-w-2xl text-sm leading-relaxed text-muted">
        Le projet reste ouvert des semaines. La question du jour a une réponse nette à la fin de la séance, même
        négative. Un échec documenté compte comme une clôture. Si la question n’a pas de réponse, elle était trop large :
        le NEXT devient la reformuler, pas « continuer ».
      </p>

      <div className="flex flex-col gap-2 sm:flex-row">
        {NEXT_EXAMPLES.map((item) => {
          const label = PROJECTS.find((p) => p.id === item.project)?.short;
          return (
            <Button
              key={item.project}
              variant={item.project === projectId ? "default" : "outline"}
              className="h-12 flex-1"
              onClick={() => setProjectId(item.project)}
            >
              {label}
            </Button>
          );
        })}
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <Panel>
          <p className="font-mono text-[11px] tracking-widest text-warn uppercase">Trop vague</p>
          <p className="mt-3 text-base leading-relaxed">{example.bad}</p>
        </Panel>
        <Panel>
          <p className="font-mono text-[11px] tracking-widest text-ok uppercase">Assez précis</p>
          <p className="mt-3 text-base leading-relaxed">{example.good}</p>
        </Panel>
      </div>

      <div>
        <h2 className="mb-4 font-display text-2xl font-medium tracking-tight">
          Fermeture type — {project?.short}
        </h2>
        <dl className="grid gap-3">
          {NEXT_FIELDS.map((field) => (
            <div key={field.key} className="grid gap-1 rounded-lg bg-paper px-5 py-4 shadow-[var(--shadow-border)] sm:grid-cols-[7rem_1fr] sm:gap-6">
              <dt className="font-mono text-xs tracking-widest text-muted">{field.label}</dt>
              <dd>
                <p className="text-sm leading-relaxed">{example.fields[field.key]}</p>
                <p className="mt-1 text-xs text-faint">{field.hint}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <Panel>
        <p className="font-medium">Pour l’essai, l’unité qui se ferme est la note</p>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          On lit exactement ce qu’il faut pour produire cette note. Critère de clôture : elle a au moins un lien, dans
          Obsidian, vers l’argument qu’elle va servir. Les parties denses se dédoublent : séance de repérage, puis
          séance de notation. NotebookLM (Gemini Notebook) cible et descoper une source le soir — il ne rédige pas les
          notes.
        </p>
        <p className="mt-4 font-mono text-xs text-muted">
          Indicateur à suivre : sujet du jour clos — oui / non
        </p>
      </Panel>
    </div>
  );
}
