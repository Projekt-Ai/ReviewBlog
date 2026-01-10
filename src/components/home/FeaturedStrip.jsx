import { useMemo } from "react";
import ArticleCardSkeleton from "./ArticleCardSkeleton";

export default function HomeFeed() {
  // Mock data SHAPE only (ids), strictly for layout scaffolding
  const items = useMemo(() => Array.from({ length: 6 }, (_, i) => ({ id: i })), []);

  return (
    <section className="rb-grid" aria-label="Home feed placeholders">
      {items.map((item) => (
        <ArticleCardSkeleton key={item.id} />
      ))}
    </section>
  );
}
