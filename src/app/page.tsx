"use client";

import HelloWorld from "@/components/HelloWorld";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      
      {/* Main Content */}
      <div className="relative flex items-center justify-center min-h-screen p-4">
        <HelloWorld />
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full py-6 text-center text-sm text-gray-500">
        <p>Built with Next.js 15, shadcn/ui, and Tailwind CSS</p>
      </footer>
    </main>
  );
}