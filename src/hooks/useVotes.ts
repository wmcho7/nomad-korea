"use client";

import { useCallback, useSyncExternalStore, useMemo } from "react";

type VoteType = "like" | "dislike" | null;
type VotesMap = Record<string, VoteType>;

const STORAGE_KEY = "nomad-korea-votes";

// 커스텀 이벤트를 사용하여 같은 탭 내 업데이트 감지
const VOTES_UPDATED_EVENT = "nomad-korea-votes-updated";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(VOTES_UPDATED_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(VOTES_UPDATED_EVENT, callback);
  };
}

function getSnapshot(): string {
  return localStorage.getItem(STORAGE_KEY) || "{}";
}

function getServerSnapshot(): string {
  return "{}";
}

export function useVotes() {
  // useSyncExternalStore로 localStorage 구독
  const storeValue = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // storeValue를 파싱하여 votes 객체로 변환
  const votes = useMemo((): VotesMap => {
    try {
      return JSON.parse(storeValue);
    } catch {
      return {};
    }
  }, [storeValue]);

  // 투표 조회
  const getVote = useCallback(
    (cityId: string): VoteType => votes[cityId] || null,
    [votes]
  );

  // 모든 투표 조회
  const getAllVotes = useCallback((): VotesMap => votes, [votes]);

  // 투표 저장
  const setVote = useCallback((cityId: string, vote: VoteType) => {
    try {
      const current = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      const next = { ...current };
      if (vote === null) {
        delete next[cityId];
      } else {
        next[cityId] = vote;
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      // 같은 탭 내 업데이트를 위한 커스텀 이벤트 발생
      window.dispatchEvent(new Event(VOTES_UPDATED_EVENT));
    } catch {
      // localStorage 저장 실패 시 무시
    }
  }, []);

  return { getVote, setVote, getAllVotes, isLoaded: true };
}
