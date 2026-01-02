import type { City, CityFilterOptions } from '@/types';
import { CITIES } from '@/data';

/**
 * 모든 도시 조회
 * @param sortBy 정렬 기준 (기본: likes)
 * @param order 정렬 순서 (기본: desc)
 */
export async function getCities(
  sortBy: keyof City = 'likes',
  order: 'asc' | 'desc' = 'desc'
): Promise<City[]> {
  const sorted = [...CITIES].sort((a, b) => {
    const aValue = a[sortBy];
    const bValue = b[sortBy];

    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return order === 'desc' ? bValue - aValue : aValue - bValue;
    }

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return order === 'desc'
        ? bValue.localeCompare(aValue)
        : aValue.localeCompare(bValue);
    }

    return 0;
  });

  return sorted;
}

/**
 * ID로 도시 조회
 * @param id 도시 ID
 */
export async function getCityById(id: string): Promise<City | null> {
  const city = CITIES.find(city => city.id === id);
  return city ?? null;
}

/**
 * 필터 조건으로 도시 조회
 * @param filters 필터 옵션
 * @param sortBy 정렬 기준
 * @param order 정렬 순서
 */
export async function filterCities(
  filters: CityFilterOptions,
  sortBy: keyof City = 'likes',
  order: 'asc' | 'desc' = 'desc'
): Promise<City[]> {
  let result = [...CITIES];

  // 예산 필터
  if (filters.budget) {
    result = result.filter(city => city.budget === filters.budget);
  }

  // 지역 필터 ("전체"가 아닌 경우만)
  if (filters.region && filters.region !== "전체") {
    result = result.filter(city => city.region === filters.region);
  }

  // 환경 필터
  if (filters.environment) {
    result = result.filter(city => city.environment === filters.environment);
  }

  // 계절 필터
  if (filters.season) {
    result = result.filter(city => city.bestSeason === filters.season);
  }

  // 검색어 필터 (도시명, 지역명)
  if (filters.search) {
    const query = filters.search.toLowerCase();
    result = result.filter(
      city =>
        city.name.toLowerCase().includes(query) ||
        city.region.toLowerCase().includes(query)
    );
  }

  // 정렬
  result.sort((a, b) => {
    const aValue = a[sortBy];
    const bValue = b[sortBy];

    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return order === 'desc' ? bValue - aValue : aValue - bValue;
    }

    return 0;
  });

  return result;
}

/**
 * 도시 개수 조회
 */
export async function getCitiesCount(): Promise<number> {
  return CITIES.length;
}
