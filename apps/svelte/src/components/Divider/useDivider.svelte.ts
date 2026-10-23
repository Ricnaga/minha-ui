import type { HTMLAttributes } from 'svelte/elements';

import { divider } from '@/theme';

import type { UseDividerProps } from './divider.types';

export function useDivider(getProps: () => UseDividerProps) {
  const dividerProps: HTMLAttributes<HTMLDivElement> = {
    role: 'separator',
    get 'aria-orientation'() {
      return getProps().orientation ?? 'horizontal';
    },
    get class() {
      const { orientation, inset, class: className } = getProps();

      return divider({ orientation, inset, class: className });
    },
  };

  return { dividerProps };
}
