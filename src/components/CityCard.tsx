import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Bookmark, ArrowRight, Wifi, Wallet } from "lucide-react";

export interface CityCardProps {
  id: string;
  name: string;
  region: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  costLevel: "저렴" | "보통" | "비쌈";
  internetQuality: "양호" | "좋음" | "매우좋음";
  tags: string[];
}

const costLevelColors = {
  "저렴": "text-green-600",
  "보통": "text-yellow-600",
  "비쌈": "text-red-600",
};

const internetQualityColors = {
  "양호": "text-yellow-600",
  "좋음": "text-green-600",
  "매우좋음": "text-primary",
};

export function CityCard({
  id,
  name,
  region,
  imageUrl,
  rating,
  reviewCount,
  costLevel,
  internetQuality,
  tags,
}: CityCardProps) {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={imageUrl}
          alt={`${name} 이미지`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Bookmark Button */}
        <Button
          variant="secondary"
          size="icon"
          className="absolute top-3 right-3 h-8 w-8 bg-white/80 hover:bg-white backdrop-blur-sm"
        >
          <Bookmark className="h-4 w-4" />
          <span className="sr-only">저장하기</span>
        </Button>
      </div>

      <CardContent className="p-4">
        {/* City Name & Region */}
        <div className="mb-2">
          <h3 className="text-lg font-semibold text-foreground">{name}</h3>
          <p className="text-sm text-muted-foreground">{region}</p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <Star className="h-4 w-4 fill-secondary text-secondary" />
          <span className="font-medium">{rating.toFixed(1)}</span>
          <span className="text-muted-foreground text-sm">({reviewCount})</span>
        </div>

        {/* Key Metrics */}
        <div className="flex items-center gap-4 mb-3 text-sm">
          <div className="flex items-center gap-1">
            <Wallet className="h-4 w-4 text-muted-foreground" />
            <span className={costLevelColors[costLevel]}>{costLevel}</span>
          </div>
          <div className="flex items-center gap-1">
            <Wifi className="h-4 w-4 text-muted-foreground" />
            <span className={internetQualityColors[internetQuality]}>{internetQuality}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              #{tag}
            </Badge>
          ))}
        </div>

        {/* Action Button */}
        <Link href={`/city/${id}`} className="block">
          <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            상세보기
            <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
