import { FloatingNavbar } from "@/components/FloatingNavbar";
import { HeroSection } from "@/components/HeroSection";
import { TerrainScrollytelling } from "@/components/TerrainScrollytelling";
import { TechSpecGrid } from "@/components/TechSpecGrid";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <FloatingNavbar />
      <HeroSection />
      <TerrainScrollytelling />
      <TechSpecGrid />
      <Footer />
    </main>
  );
}
