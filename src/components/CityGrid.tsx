"use client";

import { CityCard, type CityCardProps } from "@/components/CityCard";
import { Button } from "@/components/ui/button";
import { LayoutGrid, List, Map, ChevronLeft, ChevronRight } from "lucide-react";

// Mock data for demonstration
const mockCities: CityCardProps[] = [
  {
    id: "jeju",
    name: "제주시",
    region: "제주특별자치도",
    imageUrl: "https://images.unsplash.com/photo-1579169326371-b5c8e8b6b4a4?w=800&q=80",
    rating: 4.3,
    reviewCount: 128,
    costLevel: "저렴",
    internetQuality: "양호",
    tags: ["바다", "힐링", "자연"],
  },
  {
    id: "busan",
    name: "부산광역시",
    region: "부산",
    imageUrl: "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=800&q=80",
    rating: 4.5,
    reviewCount: 256,
    costLevel: "보통",
    internetQuality: "좋음",
    tags: ["도시", "맛집", "해변"],
  },
  {
    id: "gangneung",
    name: "강릉시",
    region: "강원도",
    imageUrl: "https://images.unsplash.com/photo-1596476170875-ec4a4333699d?w=800&q=80",
    rating: 4.1,
    reviewCount: 89,
    costLevel: "저렴",
    internetQuality: "양호",
    tags: ["바다", "카페", "조용함"],
  },
  {
    id: "jeonju",
    name: "전주시",
    region: "전라북도",
    imageUrl: "https://images.unsplash.com/photo-1592882595561-2765e8a68e1d?w=800&q=80",
    rating: 4.2,
    reviewCount: 95,
    costLevel: "저렴",
    internetQuality: "좋음",
    tags: ["한옥", "맛집", "문화"],
  },
  {
    id: "daejeon",
    name: "대전광역시",
    region: "대전",
    imageUrl: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800&q=80",
    rating: 4.0,
    reviewCount: 142,
    costLevel: "보통",
    internetQuality: "좋음",
    tags: ["교통", "IT", "대도시"],
  },
  {
    id: "chuncheon",
    name: "춘천시",
    region: "강원도",
    imageUrl: "https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800&q=80",
    rating: 3.9,
    reviewCount: 67,
    costLevel: "저렴",
    internetQuality: "양호",
    tags: ["호수", "자연", "조용함"],
  },
];

export function CityGrid() {
  const totalCities = 42;
  const currentPage = 1;
  const totalPages = 7;

  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6">
          {/* Total Count */}
          <p className="text-sm text-muted-foreground">
            총 <span className="font-semibold text-foreground">{totalCities}개</span> 도시
          </p>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-1 border rounded-lg p-1">
            <Button variant="default" size="sm" className="h-8 px-3">
              <LayoutGrid className="h-4 w-4 mr-1" />
              그리드
            </Button>
            <Button variant="ghost" size="sm" className="h-8 px-3">
              <List className="h-4 w-4 mr-1" />
              리스트
            </Button>
            <Button variant="ghost" size="sm" className="h-8 px-3">
              <Map className="h-4 w-4 mr-1" />
              지도
            </Button>
          </div>
        </div>

        {/* City Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {mockCities.map((city) => (
            <CityCard key={city.id} {...city} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2">
          <Button variant="outline" size="icon" disabled>
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">이전 페이지</span>
          </Button>

          {[1, 2, 3].map((page) => (
            <Button
              key={page}
              variant={page === currentPage ? "default" : "outline"}
              size="sm"
              className="w-9 h-9"
            >
              {page}
            </Button>
          ))}

          <span className="px-2 text-muted-foreground">...</span>

          <Button variant="outline" size="sm" className="w-9 h-9">
            {totalPages}
          </Button>

          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">다음 페이지</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
