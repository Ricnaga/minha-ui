export function useDebounce<T>(value: T, delay: number) {
  let debouncedValue = $state<T>(value);

  $effect(() => {
    const currentValue = value;
    const id = setTimeout(() => {
      debouncedValue = currentValue;
    }, delay);
    return () => clearTimeout(id);
  });

  return {
    get value() {
      return debouncedValue;
    }
  };
}
