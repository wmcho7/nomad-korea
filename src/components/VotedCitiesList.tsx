"use client";

import { useMemo } from "react";
import { CityCard } from "@/components/CityCard";
import { useVotes } from "@/hooks";
import { CITIES } from "@/data";
import { ThumbsUp, ThumbsDown } from "lucide-react";

export function VotedCitiesList() {
  const { getAllVotes } = useVotes();
  const votes = getAllVotes();

  const { likedCities, dislikedCities } = useMemo(() => {
    const likedIds = Object.entries(votes)
      .filter(([, vote]) => vote === "like")
      .map(([id]) => id);

    const dislikedIds = Object.entries(votes)
      .filter(([, vote]) => vote === "dislike")
      .map(([id]) => id);

    return {
      likedCities: CITIES.filter((c) => likedIds.includes(c.id)),
      dislikedCities: CITIES.filter((c) => dislikedIds.includes(c.id)),
    };
  }, [votes]);

  return (
    <div className="space-y-8">
      {/* 좋아요 누른 도시 */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <ThumbsUp className="h-5 w-5 text-blue-600" />
          <h2 className="text-lg font-semibold text-foreground">
            좋아요 누른 도시
          </h2>
          <span className="text-sm text-muted-foreground">
            ({likedCities.length}개)
          </span>
        </div>
        {likedCities.length === 0 ? (
          <p className="text-sm text-muted-foreground py-8 text-center bg-muted/30 rounded-lg">
            아직 좋아요 누른 도시가 없습니다
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {likedCities.map((city) => (
              <CityCard key={city.id} {...city} />
            ))}
          </div>
        )}
      </section>

      {/* 싫어요 누른 도시 */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <ThumbsDown className="h-5 w-5 text-red-600" />
          <h2 className="text-lg font-semibold text-foreground">
            싫어요 누른 도시
          </h2>
          <span className="text-sm text-muted-foreground">
            ({dislikedCities.length}개)
          </span>
        </div>
        {dislikedCities.length === 0 ? (
          <p className="text-sm text-muted-foreground py-8 text-center bg-muted/30 rounded-lg">
            아직 싫어요 누른 도시가 없습니다
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {dislikedCities.map((city) => (
              <CityCard key={city.id} {...city} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
