import type { AriaRole, HTMLAttributes } from 'svelte/elements';

import { scrollArea } from '@/theme';

import type { UseScrollAreaProps } from './scroll-area.types';

export function useScrollArea(getProps: () => UseScrollAreaProps) {
  const scrollAreaProps: HTMLAttributes<HTMLDivElement> & {
    role: AriaRole;
    tabindex: number;
  } = {
    get role() {
      return getProps().role ?? 'region';
    },
    get tabindex() {
      return getProps().tabindex ?? 0;
    },
    get class() {
      const { orientation, size, class: className } = getProps();

      return scrollArea({ orientation, size, class: className });
    },
  };

  return { scrollAreaProps };
}
