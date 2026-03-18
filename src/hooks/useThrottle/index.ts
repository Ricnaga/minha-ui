import { useCallback, useRef } from "react";

type UseThrottleCallback<T extends unknown[]> = (...args: T) => void;

export function useThrottle<T extends unknown[]>(
  callback: UseThrottleCallback<T>,
  delay: number
): UseThrottleCallback<T> {
  const lastCall = useRef<number>(0);
  const lastArgs = useRef<T | null>(null);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  return useCallback(
    (...args: T) => {
      const now = Date.now();
      const timeSinceLastCall = now - lastCall.current;

      lastArgs.current = args;

      if (timeSinceLastCall >= delay) {
        lastCall.current = now;
        callback(...args);
      } else {
        if (timeoutId.current) {
          clearTimeout(timeoutId.current);
        }

        timeoutId.current = setTimeout(() => {
          if (lastArgs.current) {
            lastCall.current = Date.now();
            callback(...lastArgs.current);
          }
        }, delay - timeSinceLastCall);
      }
    },
    [callback, delay]
  ) as UseThrottleCallback<T>;
}
