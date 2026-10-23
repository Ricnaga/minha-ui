import type { HTMLAttributes } from 'vue';

import type { CardFooterVariants } from '@/theme';

export interface UseCardFooterProps extends CardFooterVariants {
  class?: string;
}

export type CardFooterProps = UseCardFooterProps &
  /* @vue-ignore */ Omit<
    HTMLAttributes,
    'class' | 'align' | 'wrap' | 'divider'
  >;
