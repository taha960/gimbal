import { useNavigate } from "@tanstack/react-router";
import { useCallback } from "react";
import { ChapterView } from "@/components/chapters/view";
import { SiteShell } from "@/components/site-shell";
import type { ChapterId } from "@/lib/system";

export function AppFrame({ chapterId }: { chapterId: ChapterId }) {
  const navigate = useNavigate();

  const onChange = useCallback(
    (id: ChapterId) => {
      if (id === "intention") {
        void navigate({ to: "/" });
        return;
      }
      void navigate({ to: "/$chapterId", params: { chapterId: id } });
    },
    [navigate],
  );

  return (
    <SiteShell chapterId={chapterId} onChange={onChange}>
      <ChapterView id={chapterId} />
    </SiteShell>
  );
}
