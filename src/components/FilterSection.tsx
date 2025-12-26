"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Tag, RotateCcw } from "lucide-react";

const regions = [
  { value: "all", label: "전체" },
  { value: "capital", label: "수도권" },
  { value: "chungcheong", label: "충청" },
  { value: "yeongnam", label: "영남" },
  { value: "honam", label: "호남" },
  { value: "gangwon", label: "강원" },
  { value: "jeju", label: "제주" },
];

const characteristics = [
  { value: "beach", label: "해변도시", emoji: "🏖️" },
  { value: "metro", label: "대도시", emoji: "🏙️" },
  { value: "small", label: "소도시", emoji: "🏘️" },
  { value: "mountain", label: "산악지역", emoji: "⛰️" },
  { value: "culture", label: "문화도시", emoji: "🎭" },
];

const sortOptions = [
  { value: "rating", label: "평점순" },
  { value: "reviews", label: "리뷰 많은 순" },
  { value: "cost", label: "생활비 낮은 순" },
];

export function FilterSection() {
  return (
    <section className="bg-white border-b sticky top-16 z-40">
      <div className="container mx-auto px-4 py-4">
        {/* Region Filter */}
        <div className="flex flex-col gap-4">
          {/* First Row: Region */}
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>지역:</span>
            </div>
            <div className="flex gap-2 flex-wrap">
              {regions.map((region) => (
                <Button
                  key={region.value}
                  variant={region.value === "all" ? "default" : "outline"}
                  size="sm"
                  className="h-8"
                >
                  {region.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Second Row: Characteristics */}
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Tag className="h-4 w-4" />
              <span>특징:</span>
            </div>
            <div className="flex gap-2 flex-wrap">
              {characteristics.map((char) => (
                <Badge
                  key={char.value}
                  variant="outline"
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-3 py-1.5"
                >
                  {char.emoji} {char.label}
                </Badge>
              ))}
            </div>
          </div>

          {/* Third Row: Sort, Budget, Reset */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4 flex-wrap">
              {/* Sort Dropdown */}
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-muted-foreground">정렬:</span>
                <Select defaultValue="rating">
                  <SelectTrigger className="w-[140px] h-9">
                    <SelectValue placeholder="정렬 기준" />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Budget Slider */}
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-muted-foreground">예산:</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">₩30만</span>
                  <Slider
                    defaultValue={[30, 100]}
                    max={150}
                    min={30}
                    step={10}
                    className="w-[120px] md:w-[180px]"
                  />
                  <span className="text-sm text-muted-foreground">₩100만</span>
                </div>
              </div>
            </div>

            {/* Reset Button */}
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              <RotateCcw className="h-4 w-4 mr-1" />
              초기화
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
