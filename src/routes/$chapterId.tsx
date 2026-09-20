import { createFileRoute, Navigate } from "@tanstack/react-router";
import { AppFrame } from "@/components/app-frame";
import { CHAPTERS, type ChapterId } from "@/lib/system";

function isChapterId(value: string): value is ChapterId {
  return CHAPTERS.some((chapter) => chapter.id === value);
}

export const Route = createFileRoute("/$chapterId")({
  component: ChapterRoute,
});

function ChapterRoute() {
  const { chapterId } = Route.useParams();
  if (!isChapterId(chapterId)) {
    return <Navigate to="/" />;
  }
  return <AppFrame chapterId={chapterId} />;
}
