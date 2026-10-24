import { untrack } from 'svelte';

export function useDebounce<T>(value: T, delay: number) {
  let debouncedValue = $state<T>(value);

  $effect(() => {
    const currentValue = value;
    const timeoutId = setTimeout(() => {
      untrack(() => {
        debouncedValue = currentValue;
      });
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  });

  return {
    get value() {
      return debouncedValue;
    }
  };
}
