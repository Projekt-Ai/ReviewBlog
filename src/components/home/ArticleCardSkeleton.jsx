export default function ArticleCardSkeleton() {
  return (
    <article className="rb-card" aria-label="Article placeholder card">
      <div className="rb-skel-img" />
      <div className="rb-skel-line long" />
      <div className="rb-skel-line short" />
    </article>
  );
}
