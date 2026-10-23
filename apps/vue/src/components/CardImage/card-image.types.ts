import type { ImgHTMLAttributes } from 'vue';

import type { CardImageVariants } from '@/theme';

export interface UseCardImageProps extends CardImageVariants {
  class?: string;
}

export type CardImageProps = UseCardImageProps &
  /* @vue-ignore */ Omit<ImgHTMLAttributes, 'class' | 'rounded' | 'aspect'>;
