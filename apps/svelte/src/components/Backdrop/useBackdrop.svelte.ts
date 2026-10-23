import type { HTMLAttributes } from 'svelte/elements';

import { backdrop } from '@/theme';

import type { UseBackdropProps } from './backdrop.types';

const { base, wrapper } = backdrop();

export function useBackdrop(getProps: () => UseBackdropProps) {
  const backdropProps: HTMLAttributes<HTMLDivElement> = {
    role: 'presentation',
    get 'aria-hidden'() {
      return !getProps().isOpen;
    },
    get inert() {
      return !getProps().isOpen;
    },
    get class() {
      const { isOpen = false, blur = 'md', class: className } = getProps();
      return base({ isOpen, blur, class: className });
    },
    get style() {
      const zIndex = getProps().zIndex ?? 1000;
      return `z-index: ${zIndex}`;
    },
  };

  const wrapperProps: HTMLAttributes<HTMLDivElement> = {
    onclick: (e: MouseEvent) => e.stopPropagation(),
    get class() {
      const { isLoading = false } = getProps();
      return wrapper({ isLoading });
    },
  };

  return { backdropProps, wrapperProps };
}
