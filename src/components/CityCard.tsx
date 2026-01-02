"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import type { City } from "@/types";
import { useVotes } from "@/hooks";

export type CityCardProps = City;

export function CityCard({
  id,
  name,
  region,
  imageUrl,
  budget,
  environment,
  bestSeason,
  likes: initialLikes,
  dislikes: initialDislikes,
}: CityCardProps) {
  const { getVote, setVote } = useVotes();
  const userVote = getVote(id);

  // 좋아요/싫어요 수 계산 (기본값 + 사용자 투표)
  const likes = initialLikes + (userVote === "like" ? 1 : 0);
  const dislikes = initialDislikes + (userVote === "dislike" ? 1 : 0);

  const handleLike = () => {
    if (userVote === "like") {
      setVote(id, null);
    } else {
      setVote(id, "like");
    }
  };

  const handleDislike = () => {
    if (userVote === "dislike") {
      setVote(id, null);
    } else {
      setVote(id, "dislike");
    }
  };

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
        <div className="flex items-center justify-center gap-4 pt-2 border-t">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLike}
            className={`flex items-center gap-1 ${
              userVote === "like" ? "text-blue-600" : "text-muted-foreground"
            }`}
          >
            <ThumbsUp
              className={`h-4 w-4 ${userVote === "like" ? "fill-blue-600" : ""}`}
            />
            <span>{likes}</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleDislike}
            className={`flex items-center gap-1 ${
              userVote === "dislike" ? "text-red-600" : "text-muted-foreground"
            }`}
          >
            <ThumbsDown
              className={`h-4 w-4 ${userVote === "dislike" ? "fill-red-600" : ""}`}
            />
            <span>{dislikes}</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
