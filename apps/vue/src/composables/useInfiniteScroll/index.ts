import { ref, watch } from 'vue';
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
  const isLoading = ref(false);
  const { ref: targetRef, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin,
    once,
  });

  const handleIntersect = async () => {
    if (isLoading.value) return;
    isLoading.value = true;
    await onLoadMore();
    isLoading.value = false;
  };

  watch(isIntersecting, (value) => {
    if (value) {
      handleIntersect();
    }
  });

  return { ref: targetRef, isLoading };
}
