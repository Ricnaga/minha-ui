type UseThrottleCallback<T extends unknown[]> = (...args: T) => void;

export function useThrottle<T extends unknown[]>(
  callback: UseThrottleCallback<T>,
  delay: number
): UseThrottleCallback<T> {
  let lastCall = 0;
  let lastArgs: T | null = null;
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  const throttled = ((...args: T) => {
    const now = Date.now();
    const timeSinceLastCall = now - lastCall;

    lastArgs = args;

    if (timeSinceLastCall >= delay) {
      lastCall = now;
      callback(...args);
      return;
    }

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      if (lastArgs) {
        lastCall = Date.now();
        callback(...lastArgs);
      }
    }, delay - timeSinceLastCall);
  }) as UseThrottleCallback<T>;

  $effect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  });

  return throttled;
}
