/**
 * 기본 필터 옵션 인터페이스
 */
export interface FilterOption {
  value: string;
  label: string;
}

/**
 * 이모지가 포함된 필터 옵션 인터페이스
 */
export interface FilterOptionWithEmoji extends FilterOption {
  emoji: string;
}

/**
 * 예산 필터 value 타입
 */
export type BudgetFilterValue = "under100" | "100to200" | "over200";

/**
 * 지역 필터 value 타입
 */
export type RegionFilterValue = "all" | "capital" | "gyeongsang" | "jeolla" | "gangwon" | "jeju" | "chungcheong";

/**
 * 환경 필터 value 타입
 */
export type EnvironmentFilterValue = "nature" | "urban" | "cafe" | "coworking";

/**
 * 계절 필터 value 타입
 */
export type SeasonFilterValue = "spring" | "summer" | "fall" | "winter";
