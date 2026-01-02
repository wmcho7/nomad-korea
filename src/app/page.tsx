import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FilterSection } from "@/components/FilterSection";
import { CityGrid } from "@/components/CityGrid";
import { Footer } from "@/components/Footer";
import { MobileNavigation } from "@/components/MobileNavigation";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Filter Section */}
      <FilterSection />

      {/* Main Content */}
      <main className="pb-20 md:pb-0">
        {/* City Grid */}
        <CityGrid searchParams={params} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Navigation */}
      <MobileNavigation />
    </div>
  );
}
