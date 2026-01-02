import type {
  FilterOption,
  FilterOptionWithEmoji,
  BudgetFilterValue,
  RegionFilterValue,
  EnvironmentFilterValue,
  SeasonFilterValue,
  Budget,
  Region,
  Environment,
  Season
} from '@/types';

/**
 * 예산 필터 옵션
 */
export const BUDGET_FILTERS: Array<FilterOption & { value: BudgetFilterValue }> = [
  { value: "under100", label: "100만원 이하" },
  { value: "100to200", label: "100~200만원" },
  { value: "over200", label: "200만원 이상" },
];

/**
 * 지역 필터 옵션
 */
export const REGION_FILTERS: Array<FilterOption & { value: RegionFilterValue }> = [
  { value: "all", label: "전체" },
  { value: "capital", label: "수도권" },
  { value: "gyeongsang", label: "경상도" },
  { value: "jeolla", label: "전라도" },
  { value: "gangwon", label: "강원도" },
  { value: "jeju", label: "제주도" },
  { value: "chungcheong", label: "충청도" },
];

/**
 * 환경 필터 옵션
 */
export const ENVIRONMENT_FILTERS: Array<FilterOptionWithEmoji & { value: EnvironmentFilterValue }> = [
  { value: "nature", label: "자연친화", emoji: "🌲" },
  { value: "urban", label: "도심선호", emoji: "🏙️" },
  { value: "cafe", label: "카페작업", emoji: "☕" },
  { value: "coworking", label: "코워킹 필수", emoji: "💼" },
];

/**
 * 계절 필터 옵션
 */
export const SEASON_FILTERS: Array<FilterOptionWithEmoji & { value: SeasonFilterValue }> = [
  { value: "spring", label: "봄", emoji: "🌸" },
  { value: "summer", label: "여름", emoji: "☀️" },
  { value: "fall", label: "가을", emoji: "🍂" },
  { value: "winter", label: "겨울", emoji: "❄️" },
];

/**
 * 필터 value -> label 매핑 헬퍼
 */
export const BUDGET_VALUE_TO_LABEL: Record<BudgetFilterValue, Budget> = {
  under100: "100만원 이하",
  "100to200": "100~200만원",
  over200: "200만원 이상",
};

export const REGION_VALUE_TO_LABEL: Record<Exclude<RegionFilterValue, "all">, Region> = {
  capital: "수도권",
  gyeongsang: "경상도",
  jeolla: "전라도",
  gangwon: "강원도",
  jeju: "제주도",
  chungcheong: "충청도",
};

export const ENVIRONMENT_VALUE_TO_LABEL: Record<EnvironmentFilterValue, Environment> = {
  nature: "자연친화",
  urban: "도심선호",
  cafe: "카페작업",
  coworking: "코워킹 필수",
};

export const SEASON_VALUE_TO_LABEL: Record<SeasonFilterValue, Season> = {
  spring: "봄",
  summer: "여름",
  fall: "가을",
  winter: "겨울",
};
