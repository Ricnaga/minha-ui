import { useEffect, useRef } from 'react';
import type { FocustrapProps, UseFocustrapProps } from './focustrap.types';

export function useFocustrap(props: UseFocustrapProps) {
  const { isFocus, ...rest } = props;

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const containerCurrent = containerRef.current;
    if (!isFocus || !containerCurrent) return;

    const focusableSelectors =
      'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])';
    const focusableEls = Array.from(
      containerCurrent.querySelectorAll<HTMLElement>(focusableSelectors),
    ).filter((el) => !el.hasAttribute('disabled'));

    if (focusableEls.length === 0) return;

    const firstEl = focusableEls[0];
    const lastEl = focusableEls[focusableEls.length - 1];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      // shift + tab sai do primeiro para o último; tab faz o inverso
      const [expectedElement, nextElement] = e.shiftKey
        ? [firstEl, lastEl]
        : [lastEl, firstEl];

      if (document.activeElement !== expectedElement) return;

      e.preventDefault();
      nextElement.focus();
    };

    containerCurrent.addEventListener('keydown', handleKeyDown);

    // foco inicial
    firstEl.focus();

    return () => {
      containerCurrent?.removeEventListener('keydown', handleKeyDown);
    };
  }, [isFocus]);

  const focustrapProps: Omit<FocustrapProps, 'isFocus'> = {
    ...rest,
  };

  return { focustrapProps, containerRef };
}
