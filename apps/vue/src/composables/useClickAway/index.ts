import { onMounted, onUnmounted, ref } from 'vue';

type UseClickAwayOptions = {
  onOutsideClick: (event: Event) => void;
  enabled?: boolean;
};

export function useClickAway<T extends HTMLElement = HTMLElement>(
  options: UseClickAwayOptions
) {
  const { onOutsideClick, enabled = true } = options;
  const nodeRef = ref<T | null>(null);

  function handler(event: PointerEvent) {
    if (!enabled) return;
    const node = nodeRef.value;
    if (!node) return;
    if (!node.contains(event.target as Node)) {
      onOutsideClick(event);
    }
  }

  onMounted(() => {
    document.addEventListener('pointerdown', handler);
  });

  onUnmounted(() => {
    document.removeEventListener('pointerdown', handler);
  });

  return nodeRef;
}
