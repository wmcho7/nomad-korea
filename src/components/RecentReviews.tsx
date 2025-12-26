import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, MessageSquare } from "lucide-react";

interface Review {
  id: string;
  content: string;
  author: string;
  authorHandle: string;
  authorAvatar?: string;
  cityName: string;
  cityId: string;
  rating: number;
}

const recentReviews: Review[] = [
  {
    id: "1",
    content: "제주 한달살기 최고였어요! 바다 보면서 일하는 기분이 정말 좋았습니다.",
    author: "김노마드",
    authorHandle: "@nomad_kim",
    cityName: "제주시",
    cityId: "jeju",
    rating: 4.5,
  },
  {
    id: "2",
    content: "부산 서면 코워킹 추천합니다. 카페도 많고 밤에 먹거리도 다양해요.",
    author: "디지털제이",
    authorHandle: "@digital_jay",
    cityName: "부산광역시",
    cityId: "busan",
    rating: 4.8,
  },
];

export function RecentReviews() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-primary" />
          최근 리뷰
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0 space-y-4">
        {recentReviews.map((review) => (
          <Link
            key={review.id}
            href={`/city/${review.cityId}`}
            className="block p-3 rounded-lg hover:bg-muted transition-colors"
          >
            <p className="text-sm text-foreground mb-3 line-clamp-2">
              &ldquo;{review.content}&rdquo;
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={review.authorAvatar} alt={review.author} />
                  <AvatarFallback className="text-xs">
                    {review.author[0]}
                  </AvatarFallback>
                </Avatar>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <span>{review.authorHandle}</span>
                  <span>·</span>
                  <span>{review.cityName}</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-secondary text-secondary" />
                <span className="text-xs font-medium">{review.rating}</span>
              </div>
            </div>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}
