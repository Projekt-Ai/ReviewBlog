import { useMemo } from "react";
import ArticleCardSkeleton from "./ArticleCardSkeleton";

export default function HomeFeed() {
  const items = useMemo(
    () => Array.from({ length: 6 }, (_, i) => ({ id: i })),
    []
  );

  return (
    <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map(item => (
        <ArticleCardSkeleton key={item.id} />
      ))}
    </section>
  );
}
