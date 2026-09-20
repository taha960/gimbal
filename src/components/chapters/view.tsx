import type { JSX } from "react";
import type { ChapterId } from "@/lib/system";
import { BilanChapter } from "@/components/chapters/bilan";
import { EnergieChapter } from "@/components/chapters/energie";
import { IntentionChapter } from "@/components/chapters/intention";
import { JalonsChapter } from "@/components/chapters/jalons";
import { JourneeChapter } from "@/components/chapters/journee";
import { NextChapter } from "@/components/chapters/next";
import { ProjetsChapter } from "@/components/chapters/projets";
import { RegimesChapter } from "@/components/chapters/regimes";
import { ReglesChapter } from "@/components/chapters/regles";
import { SemaineChapter } from "@/components/chapters/semaine";

const CHAPTER_VIEWS: Record<ChapterId, () => JSX.Element> = {
  intention: IntentionChapter,
  projets: ProjetsChapter,
  journee: JourneeChapter,
  semaine: SemaineChapter,
  next: NextChapter,
  regimes: RegimesChapter,
  energie: EnergieChapter,
  jalons: JalonsChapter,
  bilan: BilanChapter,
  regles: ReglesChapter,
};

export function ChapterView({ id }: { id: ChapterId }) {
  const View = CHAPTER_VIEWS[id] ?? IntentionChapter;
  return (
    <div key={id} className="chapter-enter">
      <View />
    </div>
  );
}
