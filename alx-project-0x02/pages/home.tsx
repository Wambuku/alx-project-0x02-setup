import { useState } from "react";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

export default function HomePage() {
  const [posts, setPosts] = useState([
    { title: "Card 1", content: "This is the first reusable card." },
    { title: "Card 2", content: "Another sample card with content." },
  ]);

  const [showModal, setShowModal] = useState(false);

  const handleAddPost = (post: { title: string; content: string }) => {
    setPosts((prev) => [...prev, post]);
  };

  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Home Page</h1>

        <button
          onClick={() => setShowModal(true)}
          className="bg-green-600 text-white px-4 py-2 rounded mb-4"
        >
          Add Post
        </button>

        <div className="grid gap-4">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>

        {showModal && (
          <PostModal
            onSubmit={handleAddPost}
            onClose={() => setShowModal(false)}
          />
        )}
      </main>
    </>
  );
}
