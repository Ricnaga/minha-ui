import { ref, watch, onUnmounted } from 'vue';

export function useDebounce<T>(value: T, delay: number) {
  const debouncedValue = ref<T>(value) as { value: T };
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  watch(
    () => value,
    (newValue) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        debouncedValue.value = newValue;
      }, delay);
    },
    { immediate: true }
  );

  onUnmounted(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  });

  return debouncedValue;
}
