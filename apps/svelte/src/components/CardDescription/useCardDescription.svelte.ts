import type { HTMLAttributes } from 'svelte/elements';

import { cardDescription } from '@/theme';

import type { UseCardDescriptionProps } from './card-description.types';

export function useCardDescription(getProps: () => UseCardDescriptionProps) {
  const cardDescriptionProps: HTMLAttributes<HTMLParagraphElement> = {
    get class() {
      const { size, weight, color, align, class: className } = getProps();

      return cardDescription({
        size,
        weight,
        color,
        align,
        class: className,
      });
    },
  };

  return { cardDescriptionProps };
}
