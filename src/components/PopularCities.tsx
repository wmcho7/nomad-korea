import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Minus, Sparkles } from "lucide-react";

interface PopularCity {
  rank: number;
  name: string;
  id: string;
  trend: "up" | "down" | "same" | "new";
  trendValue?: number;
}

const popularCities: PopularCity[] = [
  { rank: 1, name: "부산광역시", id: "busan", trend: "up", trendValue: 2 },
  { rank: 2, name: "제주시", id: "jeju", trend: "down", trendValue: 1 },
  { rank: 3, name: "강릉시", id: "gangneung", trend: "same" },
  { rank: 4, name: "전주시", id: "jeonju", trend: "up", trendValue: 3 },
  { rank: 5, name: "여수시", id: "yeosu", trend: "new" },
];

const rankEmoji: Record<number, string> = {
  1: "🥇",
  2: "🥈",
  3: "🥉",
};

function TrendIndicator({ trend, value }: { trend: PopularCity["trend"]; value?: number }) {
  switch (trend) {
    case "up":
      return (
        <span className="flex items-center text-green-600 text-sm">
          <TrendingUp className="h-3 w-3 mr-0.5" />
          {value}
        </span>
      );
    case "down":
      return (
        <span className="flex items-center text-red-600 text-sm">
          <TrendingDown className="h-3 w-3 mr-0.5" />
          {value}
        </span>
      );
    case "same":
      return (
        <span className="flex items-center text-muted-foreground text-sm">
          <Minus className="h-3 w-3" />
        </span>
      );
    case "new":
      return (
        <span className="flex items-center text-secondary text-sm font-medium">
          <Sparkles className="h-3 w-3 mr-0.5" />
          NEW
        </span>
      );
  }
}

export function PopularCities() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          이번 주 인기 도시
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <ul className="space-y-3">
          {popularCities.map((city) => (
            <li key={city.id}>
              <Link
                href={`/city/${city.id}`}
                className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-muted transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg w-6">
                    {rankEmoji[city.rank] || city.rank}
                  </span>
                  <span className="font-medium">{city.name}</span>
                </div>
                <TrendIndicator trend={city.trend} value={city.trendValue} />
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
