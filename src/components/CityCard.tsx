"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import type { City } from "@/types";
import { CityVoteButtons } from "@/components/CityVoteButtons";

export type CityCardProps = City;

export function CityCard({
  id,
  name,
  region,
  imageUrl,
  budget,
  environment,
  bestSeason,
  likes,
  dislikes,
}: CityCardProps) {
  return (
    <Link href={`/cities/${id}`}>
      <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <Image
            src={imageUrl}
            alt={`${name} 이미지`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <CardContent className="p-4">
          {/* City Name & Region */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-foreground">{name}</h3>
            <p className="text-sm text-muted-foreground">{region}</p>
          </div>

          {/* Key-Value Info */}
          <div className="space-y-2 mb-4 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">예산</span>
              <span className="font-medium">{budget}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">환경</span>
              <span className="font-medium">{environment}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">최고 계절</span>
              <span className="font-medium">{bestSeason}</span>
            </div>
          </div>

          {/* Like/Dislike Buttons */}
          <CityVoteButtons
            cityId={id}
            initialLikes={likes}
            initialDislikes={dislikes}
            className="pt-2 border-t"
          />
        </CardContent>
      </Card>
    </Link>
  );
}
