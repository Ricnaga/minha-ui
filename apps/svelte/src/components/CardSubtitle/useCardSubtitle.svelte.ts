import type { HTMLAttributes } from 'svelte/elements';

import { cardSubtitle } from '@/theme';

import type { UseCardSubtitleProps } from './card-subtitle.types';

export function useCardSubtitle(getProps: () => UseCardSubtitleProps) {
  const cardSubtitleProps: HTMLAttributes<HTMLParagraphElement> = {
    get class() {
      const { size, weight, color, align, class: className } = getProps();

      return cardSubtitle({
        size,
        weight,
        color,
        align,
        class: className,
      });
    },
  };

  return { cardSubtitleProps };
}
