import { ChevronLeft, ChevronRight, Plus, Trash2 } from "lucide-react";
import { useMemo, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Panel } from "@/components/ui/mark";
import { PROJECTS, type ProjectId } from "@/lib/system";
import { COLUMNS, formatWeekRange, formatWeekTitle, shiftWeek, type ColumnId, type RegimeOption } from "@/lib/tracker";
import { useTracker } from "@/lib/tracker-store";
import { cn } from "@/lib/utils";

const FILTERS: { id: "all" | ProjectId; label: string }[] = [
  { id: "all", label: "Tous" },
  { id: "essai", label: "Essai" },
  { id: "musique", label: "Musique" },
  { id: "rustfx", label: "RustFX" },
];

export function WeekBoard() {
  const weekId = useTracker((s) => s.weekId);
  const plans = useTracker((s) => s.plans);
  const cards = useTracker((s) => s.cards);
  const setWeekId = useTracker((s) => s.setWeekId);
  const setTarget = useTracker((s) => s.setTarget);
  const setRegime = useTracker((s) => s.setRegime);
  const addCard = useTracker((s) => s.addCard);
  const stepCard = useTracker((s) => s.stepCard);
  const removeCard = useTracker((s) => s.removeCard);
  const carryOpenForward = useTracker((s) => s.carryOpenForward);

  const [filter, setFilter] = useState<"all" | ProjectId>("all");
  const [draftProject, setDraftProject] = useState<ProjectId>("essai");
  const [draftTitle, setDraftTitle] = useState("");
  const [carried, setCarried] = useState(false);

  const plan = plans[weekId];
  const weekCards = useMemo(
    () => cards.filter((card) => card.weekId === weekId && (filter === "all" || card.project === filter)),
    [cards, weekId, filter],
  );
  const openCards = weekCards.filter((card) => card.column !== "done");
  const doneCount = weekCards.filter((card) => card.column === "done").length;

  function submitCard(e: FormEvent) {
    e.preventDefault();
    addCard(draftProject, draftTitle);
    setDraftTitle("");
  }

  return (
    <div className="space-y-8">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-xs font-medium tracking-widest text-muted uppercase">Tableau de la semaine</p>
          <h1 className="mt-2 font-display text-4xl font-medium tracking-tight">{formatWeekTitle(weekId)}</h1>
          <p className="mt-2 text-muted">{formatWeekRange(weekId)}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" onClick={() => setWeekId(shiftWeek(weekId, -1))} aria-label="Semaine précédente">
            <ChevronLeft className="size-4" />
            Précédente
          </Button>
          <Button variant="outline" onClick={() => setWeekId(shiftWeek(weekId, 1))} aria-label="Semaine suivante">
            Suivante
            <ChevronRight className="size-4" />
          </Button>
        </div>
      </header>

      <div className="grid gap-3 sm:grid-cols-3">
        <Panel>
          <p className="font-mono text-xs tracking-widest text-muted uppercase">Ouvert</p>
          <p className="mt-2 font-display text-3xl font-medium tabular-nums">{openCards.length}</p>
          <p className="mt-1 text-sm text-muted">pas encore fait</p>
        </Panel>
        <Panel>
          <p className="font-mono text-xs tracking-widest text-muted uppercase">Fait</p>
          <p className="mt-2 font-display text-3xl font-medium tabular-nums">{doneCount}</p>
          <p className="mt-1 text-sm text-muted">sur {weekCards.length} cartes</p>
        </Panel>
        <Panel>
          <p className="font-mono text-xs tracking-widest text-muted uppercase">Reporter</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">L’ouvert part dans la semaine suivante, sans dupliquer.</p>
          <Button
            className="mt-4 w-full"
            variant="outline"
            onClick={() => {
              carryOpenForward();
              setCarried(true);
              window.setTimeout(() => setCarried(false), 1800);
            }}
          >
            {carried ? "Reporté" : "Reporter l’ouvert"}
          </Button>
        </Panel>
      </div>

      {openCards.length > 0 ? (
        <Panel>
          <p className="font-medium">Encore ouvert</p>
          <ul className="mt-3 grid gap-2">
            {openCards.map((card) => (
              <li key={card.id} className="flex items-baseline gap-3 text-sm">
                <span className="w-16 shrink-0 font-mono text-xs tracking-widest text-muted uppercase">
                  {labelFor(card.project)}
                </span>
                <span>{card.title}</span>
              </li>
            ))}
          </ul>
        </Panel>
      ) : (
        <Panel>
          <p className="font-medium">Rien n’est ouvert</p>
          <p className="mt-1 text-sm text-muted">Les cibles de la semaine sont faites, ou la semaine est encore vide.</p>
        </Panel>
      )}

      <div>
        <h2 className="mb-3 font-display text-2xl font-medium tracking-tight">Cibles</h2>
        <div className="grid gap-3 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <Panel key={project.id} className="flex flex-col gap-3">
              <div className="flex items-center justify-between gap-2">
                <p className="font-medium">{project.short}</p>
                <label className="sr-only" htmlFor={`regime-${project.id}`}>
                  Régime {project.short}
                </label>
                <select
                  id={`regime-${project.id}`}
                  value={plan?.regimes[project.id] ?? "Actif"}
                  onChange={(e) => setRegime(project.id, e.target.value as RegimeOption)}
                  className="h-11 rounded-md bg-bg px-3 text-sm shadow-[var(--shadow-border)]"
                >
                  {["Sprint", "Actif", "Maintenance", "Pause", "Loisir"].map((name) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  ))}
                </select>
              </div>
              <label className="grid gap-2">
                <span className="text-sm text-muted">Résultat de la semaine</span>
                <textarea
                  value={plan?.targets[project.id] ?? ""}
                  onChange={(e) => setTarget(project.id, e.target.value)}
                  rows={3}
                  className="min-h-20 w-full resize-y rounded-md bg-bg px-3 py-3 text-sm leading-relaxed shadow-[var(--shadow-border)]"
                  placeholder="Un résultat, pas une liste."
                />
              </label>
            </Panel>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {FILTERS.map((item) => (
          <Button
            key={item.id}
            variant={filter === item.id ? "default" : "outline"}
            onClick={() => setFilter(item.id)}
          >
            {item.label}
          </Button>
        ))}
      </div>

      <form onSubmit={submitCard} className="flex flex-col gap-2 rounded-lg bg-paper p-4 shadow-[var(--shadow-border)] md:flex-row md:items-center">
        <label className="sr-only" htmlFor="new-project">
          Projet
        </label>
        <select
          id="new-project"
          value={draftProject}
          onChange={(e) => setDraftProject(e.target.value as ProjectId)}
          className="h-11 rounded-md bg-bg px-3 text-sm shadow-[var(--shadow-border)] md:w-36"
        >
          {PROJECTS.map((project) => (
            <option key={project.id} value={project.id}>
              {project.short}
            </option>
          ))}
        </select>
        <label className="sr-only" htmlFor="new-card">
          Nouvelle carte
        </label>
        <input
          id="new-card"
          value={draftTitle}
          onChange={(e) => setDraftTitle(e.target.value)}
          placeholder="Ajouter une carte — une transformation, pas « continuer »"
          className="h-11 min-w-0 flex-1 rounded-md bg-bg px-3 text-sm shadow-[var(--shadow-border)]"
        />
        <Button type="submit" className="h-11">
          <Plus className="size-4" />
          Ajouter
        </Button>
      </form>

      <div className="grid gap-3 lg:grid-cols-3">
        {COLUMNS.map((column) => (
          <section key={column.id} className="rounded-lg bg-paper p-4 shadow-[var(--shadow-border)]">
            <div className="mb-3 flex items-baseline justify-between gap-2">
              <h2 className="font-display text-xl font-medium tracking-tight">{column.label}</h2>
              <p className="font-mono text-xs tabular-nums text-faint">
                {weekCards.filter((card) => card.column === column.id).length}
              </p>
            </div>
            <ul className="grid gap-2">
              {weekCards
                .filter((card) => card.column === column.id)
                .map((card) => (
                  <li key={card.id}>
                    <TrackCardView
                      title={card.title}
                      project={card.project}
                      column={card.column}
                      onBack={() => stepCard(card.id, -1)}
                      onForward={() => stepCard(card.id, 1)}
                      onRemove={() => removeCard(card.id)}
                    />
                  </li>
                ))}
            </ul>
            {weekCards.filter((card) => card.column === column.id).length === 0 ? (
              <p className="px-1 py-6 text-sm text-faint">Vide</p>
            ) : null}
          </section>
        ))}
      </div>
    </div>
  );
}

function labelFor(id: ProjectId) {
  return PROJECTS.find((project) => project.id === id)?.short ?? id;
}

function TrackCardView({
  title,
  project,
  column,
  onBack,
  onForward,
  onRemove,
}: {
  title: string;
  project: ProjectId;
  column: ColumnId;
  onBack: () => void;
  onForward: () => void;
  onRemove: () => void;
}) {
  return (
    <article className="rounded-md bg-bg p-3 shadow-[var(--shadow-border)]">
      <p className="font-mono text-xs tracking-widest text-muted uppercase">{labelFor(project)}</p>
      <p className="mt-1 text-sm leading-relaxed">{title}</p>
      <div className="mt-3 flex gap-1">
        <Button variant="outline" size="icon" className="size-11" aria-label="Reculer" disabled={column === "todo"} onClick={onBack}>
          <ChevronLeft className="size-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="size-11"
          aria-label="Avancer"
          disabled={column === "done"}
          onClick={onForward}
        >
          <ChevronRight className="size-4" />
        </Button>
        <Button variant="ghost" size="icon" className="size-11" aria-label="Retirer" onClick={onRemove}>
          <Trash2 className="size-4" />
        </Button>
      </div>
    </article>
  );
}
