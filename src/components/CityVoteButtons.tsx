"use client";

import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { useVotes } from "@/hooks";

export interface CityVoteButtonsProps {
  cityId: string;
  initialLikes: number;
  initialDislikes: number;
  size?: "sm" | "default" | "lg";
  className?: string;
}

export function CityVoteButtons({
  cityId,
  initialLikes,
  initialDislikes,
  size = "sm",
  className = "",
}: CityVoteButtonsProps) {
  const { getVote, setVote } = useVotes();
  const userVote = getVote(cityId);

  // 좋아요/싫어요 수 계산 (기본값 + 사용자 투표)
  const likes = initialLikes + (userVote === "like" ? 1 : 0);
  const dislikes = initialDislikes + (userVote === "dislike" ? 1 : 0);

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (userVote === "like") {
      setVote(cityId, null);
    } else {
      setVote(cityId, "like");
    }
  };

  const handleDislike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (userVote === "dislike") {
      setVote(cityId, null);
    } else {
      setVote(cityId, "dislike");
    }
  };

  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <Button
        variant="ghost"
        size={size}
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
        size={size}
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
  );
}
