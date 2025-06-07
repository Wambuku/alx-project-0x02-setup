import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="p-6 space-y-6">
        <h1 className="text-3xl font-bold mb-4">Reusable Buttons</h1>

        <div className="space-y-4">
          <Button label="Small Button" size="small" shape="rounded-sm" />
          <Button label="Medium Button" size="medium" shape="rounded-md" />
          <Button label="Large Button" size="large" shape="rounded-full" />
        </div>
      </main>
    </>
  );
}
