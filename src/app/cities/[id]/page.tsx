import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Wallet, Briefcase, Sun } from "lucide-react";
import { getCityById } from "@/lib/api";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CityVoteButtons } from "@/components/CityVoteButtons";

interface CityDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function CityDetailPage({ params }: CityDetailPageProps) {
  const { id } = await params;
  const city = await getCityById(id);

  if (!city) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-4">
        <Link href="/">
          <Button variant="ghost" size="sm" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            목록으로
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <Image
          src={city.imageUrl}
          alt={`${city.name} 이미지`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-2">{city.name}</h1>
            <p className="text-lg text-white/80">{city.region}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 py-8">
        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <div className="p-3 bg-blue-100 rounded-full">
                <Wallet className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">월 예산</p>
                <p className="text-lg font-semibold">{city.budget}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <div className="p-3 bg-green-100 rounded-full">
                <Briefcase className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">작업 환경</p>
                <p className="text-lg font-semibold">{city.environment}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <div className="p-3 bg-orange-100 rounded-full">
                <Sun className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">추천 시즌</p>
                <p className="text-lg font-semibold">{city.bestSeason}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tags */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-3">태그</h2>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">{city.region}</Badge>
            <Badge variant="secondary">{city.budget}</Badge>
            <Badge variant="secondary">{city.environment}</Badge>
            <Badge variant="secondary">{city.bestSeason}</Badge>
          </div>
        </div>

        {/* Vote Section */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-4 text-center">
              이 도시를 추천하시나요?
            </h2>
            <CityVoteButtons
              cityId={city.id}
              initialLikes={city.likes}
              initialDislikes={city.dislikes}
              size="default"
              className="pt-2"
            />
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
