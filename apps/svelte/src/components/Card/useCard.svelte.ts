import type { HTMLAttributes } from 'svelte/elements';

import { card } from '@/theme';

import type { UseCardProps } from './card.types';

export function useCard(getProps: () => UseCardProps) {
  const cardProps: HTMLAttributes<HTMLElement> = {
    get class() {
      const { radius, shadow, class: className } = getProps();

      return card({
        radius,
        shadow,
        class: className,
      });
    },
  };

  return { cardProps };
}
