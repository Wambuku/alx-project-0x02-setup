import  { useState } from 'react';

interface PostModalProps {
    onSubmit: (data: {title: string, content: string}) => void;
    onClose: () => void;
}

export default function PostModal({ onSubmit, onClose }: PostModalProps) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit({ title, content });
      setTitle("");
      setContent("");
      onClose();
    };
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white rounded p-6 w-full max-w-md shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Add a New Post</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Title"
              className="w-full p-2 border rounded"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <textarea
              placeholder="Content"
              className="w-full p-2 border rounded"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
            <div className="flex justify-end gap-2">
              <button type="button" onClick={onClose} className="text-gray-600">
                Cancel
              </button>
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  