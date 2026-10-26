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
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
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
        timeoutId = null;
        lastArgs = null;
      }
    }, delay - timeSinceLastCall);
  }) as UseThrottleCallback<T>;

  return throttled;
}
