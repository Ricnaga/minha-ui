export interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  once?: boolean;
}

export function useIntersectionObserver(options: UseIntersectionObserverOptions = {}) {
  const { once = false, ...observerOptions } = options;
  let isIntersecting = $state(false);
  let element: HTMLElement | null = null;
  let observer: IntersectionObserver | null = null;

  $effect(() => {
    if (!element) return;

    observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      isIntersecting = entry.isIntersecting;

      if (entry.isIntersecting && once) {
        observer?.disconnect();
      }
    }, observerOptions);

    observer.observe(element);

    return () => {
      observer?.disconnect();
      observer = null;
    };
  });

  return {
    get ref() {
      return element;
    },
    setRef(el: HTMLElement | null) {
      element = el;
    },
    action(el: HTMLElement) {
      element = el;
      return {
        destroy() {
          observer?.disconnect();
          observer = null;
          element = null;
        }
      };
    },
    get isIntersecting() {
      return isIntersecting;
    }
  };
}
