import type { HTMLAttributes } from 'vue';

import type { CardActionsVariants } from '@/theme';

export interface UseCardActionsProps extends CardActionsVariants {
  class?: string;
}

export type CardActionsProps = UseCardActionsProps &
  /* @vue-ignore */ Omit<
    HTMLAttributes,
    'class' | 'align' | 'direction' | 'wrap' | 'divider'
  >;
