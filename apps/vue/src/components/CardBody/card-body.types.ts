import type { HTMLAttributes } from 'vue';

import type { CardBodyVariants } from '@/theme';

export interface UseCardBodyProps extends CardBodyVariants {
  class?: string;
}

export type CardBodyProps = UseCardBodyProps &
  /* @vue-ignore */ Omit<
    HTMLAttributes,
    'class' | 'padding' | 'gap' | 'background'
  >;
