import { type UserProps } from "@/interfaces";

export default function UserCard({ name, email, address }: UserProps) {
  return (
    <div className="border border-gray-300 rounded-md p-4 shadow-sm hover:shadow-md transition">
      <h2 className="text-lg font-bold text-green-700 mb-1">{name}</h2>
      <p className="text-gray-700 mb-1">{email}</p>
      <p className="text-sm text-gray-500">City: {address.city}</p>
    </div>
  );
}
