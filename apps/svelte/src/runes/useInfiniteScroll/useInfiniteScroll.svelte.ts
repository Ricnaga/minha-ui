import { useIntersectionObserver } from '../useIntersectionObserver';

interface UseInfiniteScrollProps {
  onLoadMore: () => Promise<void>;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useInfiniteScroll({
  onLoadMore,
  threshold = 0.5,
  rootMargin = '0px',
  once = false,
}: UseInfiniteScrollProps) {
  let isLoading = $state(false);

  const observer = useIntersectionObserver({
    threshold,
    rootMargin,
    once,
  });

  $effect(() => {
    if (observer.isIntersecting && !isLoading) {
      (async () => {
        if (isLoading) return;
        isLoading = true;
        await onLoadMore();
        isLoading = false;
      })();
    }
  });

  return {
    ref: observer.ref,
    setRef: observer.setRef,
    action: observer.action,
    get isLoading() {
      return isLoading;
    }
  };
}
