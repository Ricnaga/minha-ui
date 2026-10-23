import type { HTMLAttributes } from 'vue';

import type { CardSubtitleVariants } from '@/theme';

export interface UseCardSubtitleProps extends CardSubtitleVariants {
  class?: string;
}

export type CardSubtitleProps = UseCardSubtitleProps &
  /* @vue-ignore */ Omit<
    HTMLAttributes,
    'class' | 'size' | 'weight' | 'color' | 'align'
  >;
