import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { CountryButtons } from "@/components/country-buttons";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* ── Ice-blue top section ── */}
      <div className="flex flex-col flex-1 bg-[hsl(190,40%,92%)]">
        {/* Single centered column — Navbar, Hero, and Buttons all share this width */}
        <div className="w-full mx-auto px-4 flex flex-col flex-1">
          <Navbar />

          <main className="flex flex-col flex-1">
            <Hero />
            <CountryButtons />
          </main>
        </div>
      </div>

      {/* ── White footer section ── */}
      <div className="w-full bg-white">
        <div className="w-full mx-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
}
