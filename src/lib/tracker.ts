import {
  addWeeks,
  endOfISOWeek,
  format,
  getISOWeek,
  getISOWeekYear,
  setISOWeek,
  setISOWeekYear,
  startOfISOWeek,
} from "date-fns";
import { fr } from "date-fns/locale";
import { MILESTONES, type ProjectId } from "@/lib/system";

export const COLUMNS = [
  { id: "todo", label: "À faire" },
  { id: "doing", label: "En cours" },
  { id: "done", label: "Fait" },
] as const;

export type ColumnId = (typeof COLUMNS)[number]["id"];

export const REGIME_OPTIONS = ["Sprint", "Actif", "Maintenance", "Pause", "Loisir"] as const;
export type RegimeOption = (typeof REGIME_OPTIONS)[number];

export type TrackCard = {
  id: string;
  weekId: string;
  project: ProjectId;
  title: string;
  column: ColumnId;
};

export type WeekPlan = {
  weekId: string;
  targets: Record<ProjectId, string>;
  regimes: Record<ProjectId, RegimeOption>;
};

export function weekIdFromDate(date = new Date()): string {
  return `${getISOWeekYear(date)}-W${String(getISOWeek(date)).padStart(2, "0")}`;
}

export function parseWeekId(weekId: string): Date {
  const match = /^(\d{4})-W(\d{2})$/.exec(weekId);
  if (!match) return startOfISOWeek(new Date());
  const year = Number(match[1]);
  const week = Number(match[2]);
  return startOfISOWeek(setISOWeek(setISOWeekYear(new Date(year, 5, 1), year), week));
}

export function shiftWeek(weekId: string, delta: number): string {
  return weekIdFromDate(addWeeks(parseWeekId(weekId), delta));
}

export function formatWeekRange(weekId: string): string {
  const start = startOfISOWeek(parseWeekId(weekId));
  const end = endOfISOWeek(start);
  const startLabel = format(start, "d MMM", { locale: fr });
  const endLabel = format(end, "d MMM yyyy", { locale: fr });
  return `${startLabel} – ${endLabel}`;
}

export function formatWeekTitle(weekId: string): string {
  const start = parseWeekId(weekId);
  return `Semaine ${String(getISOWeek(start)).padStart(2, "0")}`;
}

export function emptyPlan(weekId: string): WeekPlan {
  return {
    weekId,
    targets: { essai: "", musique: "", rustfx: "" },
    regimes: { essai: "Sprint", musique: "Actif", rustfx: "Maintenance" },
  };
}

export type JalonTarget = {
  id: string;
  horizon: string;
  when: string;
  project: ProjectId;
  projectLabel: string;
  level: string;
  test: string;
};

const PROJECT_FROM_LABEL: Record<string, ProjectId> = {
  Essai: "essai",
  Musique: "musique",
  RustFX: "rustfx",
};

export const JALON_TARGETS: JalonTarget[] = MILESTONES.flatMap((mile) =>
  mile.items.map((item) => ({
    id: `${mile.horizon}:${item.project}`,
    horizon: mile.horizon,
    when: mile.when,
    project: PROJECT_FROM_LABEL[item.project] ?? "essai",
    projectLabel: item.project,
    level: item.level,
    test: item.test,
  })),
);

export const SEED_WEEK_ID = "2026-W38";

export const SEED_PLAN: WeekPlan = {
  weekId: SEED_WEEK_ID,
  targets: {
    essai: "POC : manuscrit continu, lacunes signalées.",
    musique: "Choisir le matériau commun et poser une première trace.",
    rustfx: "État des lieux reproductible, prochaine expérience définie.",
  },
  regimes: {
    essai: "Sprint",
    musique: "Actif",
    rustfx: "Maintenance",
  },
};

export const SEED_CARDS: Omit<TrackCard, "id">[] = [
  {
    weekId: SEED_WEEK_ID,
    project: "essai",
    title: "Identifier le manuscrit maître et l’ordre de lecture",
    column: "doing",
  },
  {
    weekId: SEED_WEEK_ID,
    project: "essai",
    title: "Écrire les raccords provisoires entre chapitres",
    column: "todo",
  },
  {
    weekId: SEED_WEEK_ID,
    project: "essai",
    title: "Repérer ruptures, répétitions, conclusions trop fortes",
    column: "todo",
  },
  {
    weekId: SEED_WEEK_ID,
    project: "musique",
    title: "Choisir deux ou trois morceaux laboratoire",
    column: "todo",
  },
  {
    weekId: SEED_WEEK_ID,
    project: "rustfx",
    title: "Noter ce qui fonctionne, ce qui est isolé, ce qui bloque",
    column: "todo",
  },
];

export function newId(): string {
  return crypto.randomUUID();
}
