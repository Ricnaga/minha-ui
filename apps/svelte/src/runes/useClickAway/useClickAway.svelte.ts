type UseClickAwayOptions = {
  onOutsideClick: (event: Event) => void;
  enabled?: boolean;
};

export function useClickAway<T extends HTMLElement = HTMLElement>(
  options: UseClickAwayOptions
) {
  const { onOutsideClick, enabled = true } = options;
  let nodeRef: T | null = null;

  const handler = (event: PointerEvent) => {
    if (!enabled) return;
    if (!nodeRef) return;
    if (!nodeRef.contains(event.target as Node)) {
      onOutsideClick(event);
    }
  };

  $effect(() => {
    document.addEventListener('pointerdown', handler);
    return () => {
      document.removeEventListener('pointerdown', handler);
    };
  });

  return {
    get ref() {
      return nodeRef;
    },
    setRef(node: T | null) {
      nodeRef = node;
    },
    action(node: T) {
      nodeRef = node;
      return {
        destroy() {
          nodeRef = null;
        }
      };
    }
  };
}
