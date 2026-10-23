import type { HTMLAttributes } from 'vue';

import type { CardDescriptionVariants } from '@/theme';

export interface UseCardDescriptionProps extends CardDescriptionVariants {
  class?: string;
}

export type CardDescriptionProps = UseCardDescriptionProps &
  /* @vue-ignore */ Omit<
    HTMLAttributes,
    'class' | 'size' | 'weight' | 'color' | 'align'
  >;
