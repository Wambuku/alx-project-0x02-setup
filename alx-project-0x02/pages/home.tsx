import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="p-6 space-y-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Home Page</h1>

        <Card title="Card 1" content="This is the first reusable card component." />
        <Card title="Card 2" content="Here is another card with different content." />
        <Card title="Card 3" content="You can reuse this component as much as needed." />
      </main>
    </>
  );
}
