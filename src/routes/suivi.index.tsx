import { createFileRoute } from "@tanstack/react-router";
import { WeekBoard } from "@/components/tracker/week-board";

export const Route = createFileRoute("/suivi/")({ component: WeekBoard });
