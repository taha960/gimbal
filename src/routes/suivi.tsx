import { createFileRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { TrackerShell } from "@/components/tracker/tracker-shell";

export const Route = createFileRoute("/suivi")({ component: SuiviLayout });

function SuiviLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const view = pathname.includes("/jalons") ? "jalons" : "semaine";

  return (
    <TrackerShell view={view}>
      <Outlet />
    </TrackerShell>
  );
}
