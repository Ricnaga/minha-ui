import { useState, useCallback } from "react";
import { useIntersectionObserver } from "../useIntersectionObserver";

interface UseInfiniteScrollProps {
  onLoadMore: () => Promise<void>;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useInfiniteScroll({
  onLoadMore,
  threshold = 0.5,
  rootMargin = "0px",
  once = false,
}: UseInfiniteScrollProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleIntersect = useCallback(async () => {
    if (isLoading) return;
    setIsLoading(true);
    await onLoadMore();
    setIsLoading(false);
  }, [isLoading, onLoadMore]);

  const { ref, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin,
    once,
  });

  // Quando o elemento entra na viewport, dispara load
  if (isIntersecting) {
    handleIntersect();
  }

  return { ref, isLoading };
}
