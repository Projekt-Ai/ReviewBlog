import React from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";

const Home = () => (
  <main>
    <h1>ReviewBlog</h1>
    <p>Home feed placeholder.</p>
  </main>
);

const Post = () => {
  const { slug } = useParams();
  return (
    <main>
      <h1>Post</h1>
      <p>Slug: {slug}</p>
    </main>
  );
};

const NotFound = () => (
  <main>
    <h1>404</h1>
    <p>Page not found.</p>
  </main>
);

export default function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:slug" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
