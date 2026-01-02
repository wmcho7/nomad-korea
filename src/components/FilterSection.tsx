"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Wallet, Trees, Sun, RotateCcw } from "lucide-react";
import {
  BUDGET_FILTERS,
  REGION_FILTERS,
  ENVIRONMENT_FILTERS,
  SEASON_FILTERS,
} from "@/data";

export function FilterSection() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleFilterClick = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (params.get(key) === value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    const queryString = params.toString();
    router.push(queryString ? `?${queryString}` : "/");
  };

  const handleReset = () => {
    router.push("/");
  };

  const isActive = (key: string, value: string) =>
    searchParams.get(key) === value;

  const hasAnyFilter =
    searchParams.has("budget") ||
    searchParams.has("region") ||
    searchParams.has("environment") ||
    searchParams.has("season");

  return (
    <section className="bg-white border-b sticky top-16 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col gap-4">
          {/* 예산 필터 */}
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground min-w-[60px]">
              <Wallet className="h-4 w-4" />
              <span>예산:</span>
            </div>
            <div className="flex gap-2 flex-wrap">
              {BUDGET_FILTERS.map((budget) => (
                <Button
                  key={budget.value}
                  variant={isActive("budget", budget.value) ? "default" : "outline"}
                  size="sm"
                  className="h-8"
                  onClick={() => handleFilterClick("budget", budget.value)}
                >
                  {budget.label}
                </Button>
              ))}
            </div>
          </div>

          {/* 지역 필터 */}
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground min-w-[60px]">
              <MapPin className="h-4 w-4" />
              <span>지역:</span>
            </div>
            <div className="flex gap-2 flex-wrap">
              {REGION_FILTERS.map((region) => (
                <Button
                  key={region.value}
                  variant={isActive("region", region.value) ? "default" : "outline"}
                  size="sm"
                  className="h-8"
                  onClick={() => handleFilterClick("region", region.value)}
                >
                  {region.label}
                </Button>
              ))}
            </div>
          </div>

          {/* 환경 필터 */}
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground min-w-[60px]">
              <Trees className="h-4 w-4" />
              <span>환경:</span>
            </div>
            <div className="flex gap-2 flex-wrap">
              {ENVIRONMENT_FILTERS.map((env) => (
                <Badge
                  key={env.value}
                  variant={isActive("environment", env.value) ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-3 py-1.5"
                  onClick={() => handleFilterClick("environment", env.value)}
                >
                  {env.emoji} {env.label}
                </Badge>
              ))}
            </div>
          </div>

          {/* 계절 필터 */}
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground min-w-[60px]">
              <Sun className="h-4 w-4" />
              <span>계절:</span>
            </div>
            <div className="flex gap-2 flex-wrap">
              {SEASON_FILTERS.map((season) => (
                <Badge
                  key={season.value}
                  variant={isActive("season", season.value) ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-3 py-1.5"
                  onClick={() => handleFilterClick("season", season.value)}
                >
                  {season.emoji} {season.label}
                </Badge>
              ))}
            </div>
          </div>

          {/* 초기화 버튼 */}
          <div className="flex justify-end">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground"
              onClick={handleReset}
              disabled={!hasAnyFilter}
            >
              <RotateCcw className="h-4 w-4 mr-1" />
              초기화
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
