import { useEffect, useRef, useCallback } from "react";

type UseOutsideClickOptions = {
  onOutsideClick: (event: Event) => void;
  enabled?: boolean;
};

export function useOutsideClick<T extends Node = HTMLElement>({
  onOutsideClick,
  enabled = true,
}: UseOutsideClickOptions) {
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
