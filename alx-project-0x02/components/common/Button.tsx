import { type ButtonProps } from "@/interfaces";

export default function Button({
  label,
  size = "medium",
  shape = "rounded-md",
}: ButtonProps) {
  const sizeClasses = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`bg-blue-600 text-white ${sizeClasses[size]} ${shape} hover:bg-blue-700 transition`}
    >
      {label}
    </button>
  );
}
