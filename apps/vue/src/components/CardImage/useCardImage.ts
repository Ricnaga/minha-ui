import { computed, type ImgHTMLAttributes } from 'vue';

import { cardImage } from '@/theme';

import type { UseCardImageProps } from './card-image.types';

export function useCardImage(props: UseCardImageProps) {
  const cardImageProps = computed<ImgHTMLAttributes>(() => ({
    class: cardImage({
      rounded: props.rounded,
      aspect: props.aspect,
      class: props.class,
    }),
  }));

  return { cardImageProps };
}
