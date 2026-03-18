import { useEffect, useRef, useCallback } from "react";

type UseClickAwayOptions = {
  onOutsideClick: (event: Event) => void;
  enabled?: boolean;
};

export function useClickAway<T extends Node = HTMLElement>({
  onOutsideClick,
  enabled = true,
}: UseClickAwayOptions) {
  const nodeRef = useRef<T | null>(null);

  const setRef = useCallback((node: T | null) => {
    nodeRef.current = node;
  }, []);

  useEffect(() => {
    if (!enabled) return;

    function handler(event: PointerEvent) {
      const node = nodeRef.current;
      if (!node) return;

      if (!node.contains(event.target as Node)) {
        onOutsideClick(event);
      }
    }

    document.addEventListener("pointerdown", handler);
    return () => document.removeEventListener("pointerdown", handler);
  }, [onOutsideClick, enabled]);

  return setRef;
}
