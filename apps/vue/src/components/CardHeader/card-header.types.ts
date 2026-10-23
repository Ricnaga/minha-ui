import type { HTMLAttributes } from 'vue';

import type { CardHeaderVariants } from '@/theme';

export interface UseCardHeaderProps extends CardHeaderVariants {
  class?: string;
}

export type CardHeaderProps = UseCardHeaderProps &
  /* @vue-ignore */ Omit<
    HTMLAttributes,
    'class' | 'align' | 'divider' | 'background'
  >;
