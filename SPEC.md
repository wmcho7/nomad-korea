# NomadKorea 웹사이트 개선 명세서

## 현재 상태 요약

| 구분 | 상태 |
|------|------|
| 메인 페이지 (/) | 구현됨 |
| 인증 시스템 | Supabase Auth 연동 완료 (이메일 로그인) |
| 필터 UI | 구현됨 (예산, 지역, 환경, 최고 계절) |
| 도시 카드 | 구현됨 (Key-Value 형태 + 좋아요/싫어요) |

---

## 데이터 구조

### 도시 (City)

```typescript
interface City {
  id: string;
  name: string;
  region: "수도권" | "경상도" | "전라도" | "강원도" | "제주도" | "충청도";
  imageUrl: string;
  budget: "100만원 이하" | "100~200만원" | "200만원 이상";
  environment: "자연친화" | "도심선호" | "카페작업" | "코워킹 필수";
  bestSeason: "봄" | "여름" | "가을" | "겨울";
  likes: number;
  dislikes: number;
}
```

### 필터 옵션

| 카테고리 | 옵션 |
|----------|------|
| 예산 | 100만원 이하, 100~200만원, 200만원 이상 |
| 지역 | 전체, 수도권, 경상도, 전라도, 강원도, 제주도, 충청도 |
| 환경 | 자연친화, 도심선호, 카페작업, 코워킹 필수 |
| 최고 계절 | 봄, 여름, 가을, 겨울 |

---

## Phase 1: 데이터 레이어 구축

### 오버뷰
가짜 데이터를 체계적으로 관리하기 위한 데이터 레이어를 구축합니다. TypeScript 타입을 정의하고, 컴포넌트에 흩어진 mock 데이터를 중앙화하여 일관된 데이터 구조를 유지합니다.

### 작업 항목

- [x] `src/types/` 폴더 생성 및 타입 정의
  - [x] `city.ts` - 도시 정보 타입 (City)
  - [x] `filter.ts` - 필터 옵션 타입 (Budget, Region, Environment, Season)
- [x] `src/data/` 폴더 생성 및 mock 데이터 중앙화
  - [x] `cities.ts` - 도시 mock 데이터
  - [x] `constants.ts` - 필터 옵션 상수
- [x] `src/lib/api/` 폴더 생성 및 데이터 fetching 함수
  - [x] `cities.ts` - getCities, getCityById, filterCities
- [x] 기존 컴포넌트에서 mock 데이터 import 경로 변경
  - [x] `CityGrid.tsx` - mockCities → data/cities.ts
  - [x] `FilterSection.tsx` - 상수 → data/constants.ts

### 검증 항목

- [x] `npm run build` 빌드 성공 확인
- [x] 메인 페이지(/) 정상 렌더링 확인
- [x] CityGrid에 도시 카드가 정상 표시되는지 확인
- [x] TypeScript 타입 에러 없음 확인

---

## Phase 2: 필터 기능 구현

### 오버뷰
현재 UI만 존재하는 필터를 실제로 동작하게 만듭니다. URL 쿼리 파라미터 기반 상태 관리를 통해 필터 상태를 유지하고, 브라우저 뒤로가기/앞으로가기 시에도 필터가 유지되도록 구현합니다.

### 작업 항목

- [x] URL 쿼리 파라미터 기반 필터 상태 관리
  - [x] `useSearchParams` 훅 활용
  - [x] 쿼리 파라미터: `budget`, `region`, `environment`, `season`
- [x] `src/lib/api/cities.ts`에 필터링 함수 추가
  - [x] `filterCities(options: FilterOptions)` 함수 구현
  - [x] 예산 필터링
  - [x] 지역 필터링
  - [x] 환경 필터링
  - [x] 계절 필터링
- [x] FilterSection 필터 기능 연결
  - [x] 예산 버튼 클릭 시 필터 적용/해제
  - [x] 지역 버튼 클릭 시 필터 적용/해제
  - [x] 환경 뱃지 클릭 시 필터 적용/해제
  - [x] 계절 뱃지 클릭 시 필터 적용/해제
  - [x] 초기화 버튼 클릭 시 모든 필터 해제
  - [x] 현재 활성화된 필터 시각적 표시
- [x] CityGrid 필터 결과 반영
  - [x] 필터링된 도시 목록 표시
  - [x] 결과 개수 업데이트
  - [x] 결과 없을 시 빈 상태 UI 표시

### 검증 항목

- [x] 예산 필터 "100만원 이하" 클릭 → 해당 도시만 표시
- [x] 지역 필터 "강원도" 클릭 → 강원도 도시만 표시
- [x] 환경 필터 "자연친화" 클릭 → 해당 도시만 표시
- [x] 계절 필터 "여름" 클릭 → 해당 도시만 표시
- [x] 다중 필터 조합 동작 확인
- [x] 초기화 버튼 클릭 시 모든 필터 해제 확인
- [x] 브라우저 뒤로가기 시 이전 필터 상태 유지 확인
- [x] `npm run build` 빌드 성공 확인

---

## Phase 3: 검색 기능 구현

### 오버뷰
HeroSection의 검색바를 실제로 동작하게 만듭니다. 도시명, 지역명으로 검색할 수 있으며, 인기 태그 클릭 시 해당 필터가 적용됩니다.

### 작업 항목

- [x] HeroSection 검색바 기능 연결
  - [x] 검색어 입력 시 URL 쿼리 파라미터 업데이트
  - [x] 엔터 키 또는 검색 아이콘 클릭 시 검색 실행
  - [x] 검색어 매칭 (도시명, 지역명)
- [x] 인기 태그 기능 연결
  - [x] 태그 클릭 시 해당 환경 필터 적용
- [x] 검색 결과 CityGrid에 반영
  - [x] 검색어와 필터 조합 적용
  - [x] 결과 없을 시 빈 상태 UI

### 검증 항목

- [x] 검색바에 "제주" 입력 후 엔터 → 제주 관련 도시만 표시
- [x] 검색바에 "강원도" 입력 → 강원도 도시만 표시
- [x] 인기 태그 클릭 시 필터 적용 확인
- [x] 검색어 + 필터 조합 동작 확인
- [x] `npm run build` 빌드 성공 확인

---

## Phase 4: 좋아요/싫어요 데이터 영속화

### 오버뷰
현재 클라이언트 상태로만 관리되는 좋아요/싫어요를 로컬 스토리지에 저장하여 새로고침 후에도 유지되도록 합니다.

### 작업 항목

- [x] `src/hooks/useVotes.ts` 커스텀 훅 생성
  - [x] 로컬 스토리지에 투표 상태 저장
  - [x] 도시별 사용자 투표 상태 관리
  - [x] getVote, setVote 함수
- [x] CityCard에 훅 적용
  - [x] 초기 렌더링 시 저장된 투표 상태 로드
  - [x] 투표 변경 시 로컬 스토리지 업데이트
- [x] 전체 좋아요 수 집계
  - [x] mock 데이터의 기본 좋아요 + 사용자 투표 합산

### 검증 항목

- [x] 좋아요 클릭 후 페이지 새로고침 → 상태 유지 확인
- [x] 싫어요 클릭 후 페이지 새로고침 → 상태 유지 확인
- [x] 투표 취소 후 새로고침 → 상태 유지 확인
- [x] `npm run build` 빌드 성공 확인

---

## Phase 5: 마이페이지 구현

### 오버뷰
로그인한 사용자의 프로필과 활동 내역을 볼 수 있는 마이페이지를 구현합니다.

### 작업 항목

- [x] `src/app/my/page.tsx` 생성
  - [x] 로그인 상태 확인
  - [x] 비로그인 시 로그인 페이지로 리다이렉트
- [x] 사용자 프로필 섹션
  - [x] 이메일 표시
  - [x] 로그아웃 버튼
- [x] 활동 내역 섹션
  - [x] 좋아요 누른 도시 목록
  - [x] 싫어요 누른 도시 목록
- [x] MobileNavigation "MY" 링크 연결

### 검증 항목

- [x] 비로그인 상태에서 /my 접근 시 로그인 페이지로 리다이렉트
- [x] 로그인 후 마이페이지 정상 표시
- [x] 프로필 정보 (이메일) 표시 확인
- [x] 로그아웃 버튼 동작 확인
- [x] 좋아요/싫어요 누른 도시 목록 표시 확인
- [x] 모바일 하단 네비게이션 "MY" 클릭 시 마이페이지 이동 확인
- [x] `npm run build` 빌드 성공 확인

---

## 단계별 의존성

```
Phase 1 (데이터 레이어)
    ↓
Phase 2 (필터 기능) ← Phase 1 필수
    ↓
Phase 3 (검색 기능) ← Phase 1, 2 필수
    ↓
Phase 4 (좋아요 영속화) ← Phase 1 필수
    ↓
Phase 5 (마이페이지) ← Phase 4 권장
```

---

## 파일 구조 (목표)

```
src/
├── app/
│   ├── auth/callback/route.ts
│   ├── login/
│   │   ├── page.tsx
│   │   └── actions.ts
│   ├── register/
│   │   ├── page.tsx
│   │   └── actions.ts
│   ├── my/
│   │   └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   ├── CityCard.tsx
│   ├── CityGrid.tsx
│   ├── FilterSection.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   └── MobileNavigation.tsx
├── data/
│   ├── cities.ts
│   └── constants.ts
├── hooks/
│   └── useVotes.ts
├── lib/
│   ├── api/
│   │   └── cities.ts
│   ├── supabase/
│   │   ├── client.ts
│   │   └── server.ts
│   └── utils.ts
├── types/
│   ├── city.ts
│   └── filter.ts
└── middleware.ts
```
