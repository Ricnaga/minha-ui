import { onMounted, onUnmounted, ref } from 'vue';

export interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  once?: boolean;
}

export function useIntersectionObserver(options: UseIntersectionObserverOptions = {}) {
  const { once = false, ...observerOptions } = options;
  const isIntersecting = ref(false);
  const refEl = ref<HTMLElement | null>(null);
  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    if (!refEl.value) return;

    observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      isIntersecting.value = entry.isIntersecting;

      if (entry.isIntersecting && once) {
        observer?.disconnect();
      }
    }, observerOptions);

    observer.observe(refEl.value);
  });

  onUnmounted(() => {
    observer?.disconnect();
    observer = null;
  });

  return { ref: refEl, isIntersecting };
}
