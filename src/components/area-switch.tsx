import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function AreaSwitch({ current }: { current: "document" | "suivi" }) {
  return (
    <div className="grid grid-cols-2 gap-1 rounded-md bg-paper p-1 shadow-[var(--shadow-border)]">
      <Link
        to="/"
        className={cn(
          "flex h-10 items-center justify-center rounded-sm text-sm font-medium transition-colors duration-150",
          current === "document" ? "bg-pine text-pine-fg" : "text-muted hover:text-ink",
        )}
      >
        Document
      </Link>
      <Link
        to="/suivi"
        className={cn(
          "flex h-10 items-center justify-center rounded-sm text-sm font-medium transition-colors duration-150",
          current === "suivi" ? "bg-pine text-pine-fg" : "text-muted hover:text-ink",
        )}
      >
        Suivi
      </Link>
    </div>
  );
}
