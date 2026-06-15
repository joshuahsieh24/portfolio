import Navbar from "@/components/navbar";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col min-h-[100dvh] relative">
      <Navbar />
      <div className="w-full max-w-5xl mx-auto px-6 pt-32 pb-24 relative z-10">
        {children}
      </div>
    </main>
  );
}
