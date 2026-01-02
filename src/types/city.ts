/**
 * 예산 범위 타입
 */
export type Budget = "100만원 이하" | "100~200만원" | "200만원 이상";

/**
 * 지역 타입
 */
export type Region = "수도권" | "경상도" | "전라도" | "강원도" | "제주도" | "충청도";

/**
 * 환경 타입
 */
export type Environment = "자연친화" | "도심선호" | "카페작업" | "코워킹 필수";

/**
 * 계절 타입
 */
export type Season = "봄" | "여름" | "가을" | "겨울";

/**
 * 도시 데이터 인터페이스
 */
export interface City {
  id: string;
  name: string;
  region: Region;
  imageUrl: string;
  budget: Budget;
  environment: Environment;
  bestSeason: Season;
  likes: number;
  dislikes: number;
}

/**
 * 도시 필터 옵션 인터페이스
 */
export interface CityFilterOptions {
  budget?: Budget | null;
  region?: Region | "전체" | null;
  environment?: Environment | null;
  season?: Season | null;
  search?: string | null;
}
