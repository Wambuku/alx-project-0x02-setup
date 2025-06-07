import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex gap-6">
        <Link href="/" className="hover:underline">Home (Index)</Link>
        <Link href="/home" className="hover:underline">Home</Link>
        <Link href="/about" className="hover:underline">About</Link>
      </nav>
    </header>
  );
}
