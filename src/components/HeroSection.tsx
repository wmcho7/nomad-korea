import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

const popularTags = [
  { label: "바다", emoji: "🌊" },
  { label: "카페많음", emoji: "☕" },
  { label: "저렴한", emoji: "💰" },
  { label: "조용한", emoji: "🤫" },
  { label: "교통좋음", emoji: "🚇" },
];

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        {/* Headline */}
        <div className="mb-8">
          <span className="text-4xl mb-4 block">🇰🇷</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            대한민국에서 노마드하기 좋은
            <br />
            도시를 찾아보세요
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            실제 경험자들의 리뷰를 통해 나에게 맞는 최적의 도시를 발견하세요
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="도시명, 지역, 키워드로 검색..."
              className="pl-12 pr-4 py-6 text-lg rounded-full border-2 border-border focus:border-primary shadow-sm"
            />
          </div>
        </div>

        {/* Popular Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="text-sm text-muted-foreground mr-2">인기 태그:</span>
          {popularTags.map((tag) => (
            <Badge
              key={tag.label}
              variant="secondary"
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-3 py-1"
            >
              {tag.emoji} #{tag.label}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
