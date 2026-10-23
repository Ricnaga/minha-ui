import type { HTMLAttributes } from 'svelte/elements';

import { cardTitle } from '@/theme';

import type { UseCardTitleProps } from './card-title.types';

export function useCardTitle(getProps: () => UseCardTitleProps) {
  const cardTitleProps: HTMLAttributes<HTMLHeadingElement> = {
    get class() {
      const { size, weight, color, align, class: className } = getProps();

      return cardTitle({
        size,
        weight,
        color,
        align,
        class: className,
      });
    },
  };

  return {
    cardTitleProps,
    get tag() {
      return getProps().as ?? 'h2';
    },
  };
}
