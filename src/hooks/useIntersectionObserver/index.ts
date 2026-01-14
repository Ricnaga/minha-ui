import { useEffect, useMemo, useRef, useState, type RefObject } from "react";

export interface UseIntersectionObserverOptions
  extends IntersectionObserverInit {
  once?: boolean;
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
): {
  ref: RefObject<HTMLDivElement | null>;
  isIntersecting: boolean;
} {
  const { once = false, ...observerOptions } = options;
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const memoizedOptions = useMemo(
    () => ({
      root: observerOptions.root,
      rootMargin: observerOptions.rootMargin,
      threshold: observerOptions.threshold,
    }),
    [
      observerOptions.root,
      observerOptions.rootMargin,
      observerOptions.threshold,
    ]
  );

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsIntersecting(entry.isIntersecting);

      if (entry.isIntersecting && once) {
        observer.disconnect();
      }
    }, memoizedOptions);

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [once, memoizedOptions]);

  return { ref, isIntersecting };
}
