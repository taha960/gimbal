import { Panel } from "@/components/ui/mark";
import { JALON_TARGETS } from "@/lib/tracker";
import { useTracker } from "@/lib/tracker-store";
import { cn } from "@/lib/utils";

const HORIZONS = ["3 mois", "6 mois", "12 mois"] as const;

export function JalonsBoard() {
  const jalons = useTracker((s) => s.jalons);
  const toggleJalon = useTracker((s) => s.toggleJalon);
  const reached = JALON_TARGETS.filter((item) => jalons[item.id]).length;
  const remaining = JALON_TARGETS.filter((item) => !jalons[item.id]);

  return (
    <div className="space-y-8">
      <header>
        <p className="font-mono text-xs font-medium tracking-widest text-muted uppercase">Trajectoire annuelle</p>
        <h1 className="mt-2 font-display text-4xl font-medium tracking-tight">Jalons</h1>
        <p className="mt-2 max-w-2xl text-muted">
          Les jalons se valident par leurs résultats, pas par la date. Cocher un critère quand le test est vraiment
          rempli.
        </p>
      </header>

      <div className="grid gap-3 sm:grid-cols-2">
        <Panel>
          <p className="font-mono text-xs tracking-widest text-muted uppercase">Atteints</p>
          <p className="mt-2 font-display text-3xl font-medium tabular-nums">
            {reached}
            <span className="text-xl text-muted"> / {JALON_TARGETS.length}</span>
          </p>
        </Panel>
        <Panel>
          <p className="font-mono text-xs tracking-widest text-muted uppercase">Pas encore</p>
          <p className="mt-2 font-display text-3xl font-medium tabular-nums">{remaining.length}</p>
        </Panel>
      </div>

      {remaining.length > 0 ? (
        <Panel>
          <p className="font-medium">Ce qui n’est encore fait</p>
          <ul className="mt-4 grid gap-3">
            {remaining.map((item) => (
              <li key={item.id} className="grid gap-1 border-t border-line pt-3 first:border-t-0 first:pt-0 md:grid-cols-4">
                <p className="font-mono text-xs tracking-widest text-muted uppercase md:col-span-1">
                  {item.horizon} · {item.projectLabel}
                </p>
                <div className="md:col-span-3">
                  <p className="text-sm font-medium">{item.level}</p>
                  <p className="mt-1 text-sm text-muted">{item.test}</p>
                </div>
              </li>
            ))}
          </ul>
        </Panel>
      ) : (
        <Panel>
          <p className="font-medium">Tous les critères visibles sont cochés</p>
          <p className="mt-1 text-sm text-muted">La date ne valide rien à elle seule — seulement le test.</p>
        </Panel>
      )}

      {HORIZONS.map((horizon) => {
        const items = JALON_TARGETS.filter((item) => item.horizon === horizon);
        const when = items[0]?.when;
        const done = items.filter((item) => jalons[item.id]).length;
        return (
          <section key={horizon}>
            <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="font-display text-2xl font-medium tracking-tight">{horizon}</h2>
              <p className="font-mono text-xs text-muted">
                {when} · {done}/{items.length}
              </p>
            </div>
            <div className="mb-4 h-1 overflow-hidden rounded-full bg-line">
              <div
                className="h-1 bg-pine transition-[width] duration-200 ease-[var(--ease-out)]"
                style={{ width: `${(done / items.length) * 100}%` }}
              />
            </div>
            <ul className="grid gap-2">
              {items.map((item) => {
                const checked = Boolean(jalons[item.id]);
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => toggleJalon(item.id)}
                      className={cn(
                        "flex w-full items-start gap-4 rounded-lg px-4 py-4 text-left shadow-[var(--shadow-border)] transition-colors duration-150",
                        checked ? "bg-pine text-pine-fg" : "bg-paper hover:shadow-[var(--shadow-border-hover)]",
                      )}
                    >
                      <span
                        className={cn(
                          "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-xs border",
                          checked ? "border-pine-fg bg-pine-fg text-pine" : "border-line-strong bg-bg",
                        )}
                        aria-hidden="true"
                      >
                        {checked ? (
                          <span className="block size-2 rounded-xs bg-pine" />
                        ) : null}
                      </span>
                      <span>
                        <span className="block font-mono text-xs tracking-widest uppercase opacity-70">
                          {item.projectLabel}
                        </span>
                        <span className="mt-1 block font-medium">{item.level}</span>
                        <span className={cn("mt-1 block text-sm", checked ? "opacity-80" : "text-muted")}>
                          {item.test}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
