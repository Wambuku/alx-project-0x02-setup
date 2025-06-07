import { type PostProps } from "@/interfaces";

export default function PostCard({ title, body, userId }: PostProps) {
  return (
    <div className="border border-gray-300 rounded-md p-4 shadow-sm hover:shadow-md transition">
      <h2 className="text-lg font-bold text-blue-700 mb-1">{title}</h2>
      <p className="text-gray-700 mb-2">{body}</p>
      <span className="text-sm text-gray-500">User ID: {userId}</span>
    </div>
  );
}
