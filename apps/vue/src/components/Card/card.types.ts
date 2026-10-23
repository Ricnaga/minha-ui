import type { HTMLAttributes } from 'vue';

import type { CardVariants } from '@/theme';

export interface UseCardProps extends CardVariants {
  class?: string;
}

export type CardProps = UseCardProps &
  /* @vue-ignore */ Omit<HTMLAttributes, 'class' | 'radius' | 'shadow'>;
