import Header from "@/components/layout/Header";

export default function HomePage() {
    return (
     <>
        <Header/>
        <main className="min-h-screen flex items-center justify-center bg-gray-100">
            <h1 className="text-4xl font-bold text-gray-800">Welcome to Alx Next.js Project</h1>
        </main>
     </>
 );
}