import type { HTMLImgAttributes } from 'svelte/elements';

import { cardImage } from '@/theme';

import type { UseCardImageProps } from './card-image.types';

export function useCardImage(getProps: () => UseCardImageProps) {
  const cardImageProps: HTMLImgAttributes = {
    get class() {
      const { rounded, aspect, class: className } = getProps();

      return cardImage({
        rounded,
        aspect,
        class: className,
      });
    },
  };

  return { cardImageProps };
}
