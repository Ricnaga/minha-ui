import type { HTMLAttributes } from 'svelte/elements';

import { badge, badgeWrapper } from '@/theme';

import type { UseBadgeProps } from './badge.types';

export function useBadge(getProps: () => UseBadgeProps) {
  const wrapperProps: HTMLAttributes<HTMLDivElement> = {
    class: badgeWrapper(),
  };

  const badgeProps: HTMLAttributes<HTMLDivElement> = {
    get class() {
      const { color, size, position, class: className } = getProps();

      return badge({ color, size, position, class: className });
    },
  };

  return {
    wrapperProps,
    badgeProps,
    get value() {
      return getProps().value ?? 0;
    },
  };
}
