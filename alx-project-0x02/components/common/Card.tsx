import { CardProps } from "@/interfaces";

export default function Card({ title, content }: CardProps) {
    return (
        <div className="bg-white shadow-md rounded-md p-4 border border-gray-200 hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-semibold mb-2 text-blue-700">{title}</h2>
            <p className="text-gray-700">{content}</p>
         </div>
         
    );
}