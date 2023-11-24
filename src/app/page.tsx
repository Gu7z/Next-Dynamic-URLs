"use client";
import { useEffect, useState } from "react";

const ISSERVER = typeof window === "undefined";

export default function Home() {
  const [currentPost, setCurrentPost] = useState("");
  const [posts, setPosts] = useState<string[]>([]);

  useEffect(() => {
    setPosts(JSON.parse(localStorage.getItem("posts") || "[]"));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCurrentPost(e.target.value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!currentPost) return alert("Digite algum valor");

    const alreadyHavePost = posts.find((post) => post === currentPost);
    if (alreadyHavePost)
      return alert("Post já existe e não pode ser registrado");

    const newPosts = [...posts, currentPost];

    setPosts(newPosts);
    setCurrentPost("");
    localStorage.setItem("posts", JSON.stringify(newPosts));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={currentPost}
          onChange={handleChange}
          autoFocus
        />
        <button type="submit">Enviar</button>
      </form>
      <ul>
        {posts.map((post) => (
          <li key={post}>
            <a href={`/posts/${post}`}>{post}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
