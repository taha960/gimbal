import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ProjectId } from "@/lib/system";
import {
  emptyPlan,
  newId,
  SEED_CARDS,
  SEED_PLAN,
  shiftWeek,
  type ColumnId,
  type RegimeOption,
  type TrackCard,
  type WeekPlan,
} from "@/lib/tracker";

type TrackerState = {
  weekId: string;
  plans: Record<string, WeekPlan>;
  cards: TrackCard[];
  jalons: Record<string, boolean>;
  setWeekId: (weekId: string) => void;
  ensureWeek: (weekId: string) => void;
  setTarget: (project: ProjectId, value: string) => void;
  setRegime: (project: ProjectId, value: RegimeOption) => void;
  addCard: (project: ProjectId, title: string) => void;
  moveCard: (id: string, column: ColumnId) => void;
  stepCard: (id: string, direction: -1 | 1) => void;
  removeCard: (id: string) => void;
  toggleJalon: (id: string) => void;
  carryOpenForward: () => string;
};

const COLUMN_ORDER: ColumnId[] = ["todo", "doing", "done"];

export const useTracker = create<TrackerState>()(
  persist(
    (set, get) => ({
      weekId: SEED_PLAN.weekId,
      plans: { [SEED_PLAN.weekId]: SEED_PLAN },
      cards: SEED_CARDS.map((card, index) => ({ ...card, id: `seed-${index}` })),
      jalons: {},
      setWeekId: (weekId) => {
        get().ensureWeek(weekId);
        set({ weekId });
      },
      ensureWeek: (weekId) => {
        set((state) => {
          if (state.plans[weekId]) return state;
          return { plans: { ...state.plans, [weekId]: emptyPlan(weekId) } };
        });
      },
      setTarget: (project, value) => {
        const { weekId } = get();
        set((state) => {
          const plan = state.plans[weekId] ?? emptyPlan(weekId);
          return {
            plans: {
              ...state.plans,
              [weekId]: { ...plan, weekId, targets: { ...plan.targets, [project]: value } },
            },
          };
        });
      },
      setRegime: (project, value) => {
        const { weekId } = get();
        set((state) => {
          const plan = state.plans[weekId] ?? emptyPlan(weekId);
          return {
            plans: {
              ...state.plans,
              [weekId]: { ...plan, weekId, regimes: { ...plan.regimes, [project]: value } },
            },
          };
        });
      },
      addCard: (project, title) => {
        const trimmed = title.trim();
        if (!trimmed) return;
        const { weekId } = get();
        set((state) => ({
          cards: [
            ...state.cards,
            { id: newId(), weekId, project, title: trimmed, column: "todo" },
          ],
        }));
      },
      moveCard: (id, column) => {
        set((state) => ({
          cards: state.cards.map((card) => (card.id === id ? { ...card, column } : card)),
        }));
      },
      stepCard: (id, direction) => {
        set((state) => ({
          cards: state.cards.map((card) => {
            if (card.id !== id) return card;
            const index = COLUMN_ORDER.indexOf(card.column);
            const next = COLUMN_ORDER[index + direction];
            return next ? { ...card, column: next } : card;
          }),
        }));
      },
      removeCard: (id) => {
        set((state) => ({ cards: state.cards.filter((card) => card.id !== id) }));
      },
      toggleJalon: (id) => {
        set((state) => ({ jalons: { ...state.jalons, [id]: !state.jalons[id] } }));
      },
      carryOpenForward: () => {
        const { weekId, cards, plans } = get();
        const nextId = shiftWeek(weekId, 1);
        const open = cards.filter((card) => card.weekId === weekId && card.column !== "done");
        const already = new Set(
          cards.filter((card) => card.weekId === nextId).map((card) => `${card.project}:${card.title}`),
        );
        const copies: TrackCard[] = open
          .filter((card) => !already.has(`${card.project}:${card.title}`))
          .map((card) => ({
            ...card,
            id: newId(),
            weekId: nextId,
            column: card.column === "doing" ? "doing" : "todo",
          }));
        const currentPlan = plans[weekId] ?? emptyPlan(weekId);
        set({
          weekId: nextId,
          plans: {
            ...plans,
            [nextId]: plans[nextId] ?? {
              weekId: nextId,
              targets: { ...currentPlan.targets },
              regimes: { ...currentPlan.regimes },
            },
          },
          cards: [...cards, ...copies],
        });
        return nextId;
      },
    }),
    { name: "atelier-suivi" },
  ),
);
