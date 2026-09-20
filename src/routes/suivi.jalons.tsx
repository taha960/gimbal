import { createFileRoute } from "@tanstack/react-router";
import { JalonsBoard } from "@/components/tracker/jalons-board";

export const Route = createFileRoute("/suivi/jalons")({ component: JalonsBoard });
