import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FilterSection } from "@/components/FilterSection";
import { CityGrid } from "@/components/CityGrid";
import { PopularCities } from "@/components/PopularCities";
import { RecentReviews } from "@/components/RecentReviews";
import { Footer } from "@/components/Footer";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Separator } from "@/components/ui/separator";

export default function Home() {
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
        <CityGrid />

        {/* Separator */}
        <div className="container mx-auto px-4">
          <Separator className="my-8" />
        </div>

        {/* Popular Cities & Recent Reviews */}
        <section className="container mx-auto px-4 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PopularCities />
            <RecentReviews />
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Navigation */}
      <MobileNavigation />
    </div>
  );
}
