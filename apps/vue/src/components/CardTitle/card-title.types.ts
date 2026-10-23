import type { HTMLAttributes } from 'vue';

import type { CardTitleVariants } from '@/theme';

export type HeadingTag = 'h2' | 'h3' | 'h4';

export interface UseCardTitleProps extends CardTitleVariants {
  class?: string;
  as?: HeadingTag;
}

export type CardTitleProps = UseCardTitleProps &
  /* @vue-ignore */ Omit<
    HTMLAttributes,
    'class' | 'size' | 'weight' | 'color' | 'align'
  >;
