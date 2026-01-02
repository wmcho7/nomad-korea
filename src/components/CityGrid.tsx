import { CityCard } from "@/components/CityCard";
import { filterCities, getCitiesCount } from "@/lib/api";
import type { CityFilterOptions, BudgetFilterValue, RegionFilterValue, EnvironmentFilterValue, SeasonFilterValue } from "@/types";
import {
  BUDGET_VALUE_TO_LABEL,
  REGION_VALUE_TO_LABEL,
  ENVIRONMENT_VALUE_TO_LABEL,
  SEASON_VALUE_TO_LABEL,
} from "@/data";
import { SearchX } from "lucide-react";

interface CityGridProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}

function parseFiltersFromParams(
  searchParams: { [key: string]: string | string[] | undefined }
): CityFilterOptions {
  const budget = searchParams.budget as BudgetFilterValue | undefined;
  const region = searchParams.region as RegionFilterValue | undefined;
  const environment = searchParams.environment as EnvironmentFilterValue | undefined;
  const season = searchParams.season as SeasonFilterValue | undefined;
  const search = searchParams.q as string | undefined;

  return {
    budget: budget && budget in BUDGET_VALUE_TO_LABEL ? BUDGET_VALUE_TO_LABEL[budget] : null,
    region: region === "all" ? "전체" : region && region in REGION_VALUE_TO_LABEL ? REGION_VALUE_TO_LABEL[region] : null,
    environment: environment && environment in ENVIRONMENT_VALUE_TO_LABEL ? ENVIRONMENT_VALUE_TO_LABEL[environment] : null,
    season: season && season in SEASON_VALUE_TO_LABEL ? SEASON_VALUE_TO_LABEL[season] : null,
    search: search || null,
  };
}

export async function CityGrid({ searchParams = {} }: CityGridProps) {
  const filters = parseFiltersFromParams(searchParams);
  const cities = await filterCities(filters, "likes", "desc");
  const totalCount = await getCitiesCount();

  const hasFilters = Object.values(filters).some((v) => v !== null);

  if (cities.length === 0) {
    return (
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground">도시 리스트</h2>
            <p className="text-sm text-muted-foreground mt-1">
              총 <span className="font-semibold text-foreground">0개</span> 도시
            </p>
          </div>
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <SearchX className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">
              검색 결과가 없습니다
            </h3>
            <p className="text-sm text-muted-foreground">
              다른 필터 조건을 선택해 보세요
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground">도시 리스트</h2>
          <p className="text-sm text-muted-foreground mt-1">
            {hasFilters ? (
              <>
                <span className="font-semibold text-foreground">{cities.length}개</span> 도시 (전체 {totalCount}개)
              </>
            ) : (
              <>
                총 <span className="font-semibold text-foreground">{cities.length}개</span> 도시
              </>
            )}
          </p>
        </div>

        {/* City Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city) => (
            <CityCard key={city.id} {...city} />
          ))}
        </div>
      </div>
    </section>
  );
}
