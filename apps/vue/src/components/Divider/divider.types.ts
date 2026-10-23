import type { HTMLAttributes } from 'vue';

import type { DividerVariants } from '@/theme';

export interface UseDividerProps extends DividerVariants {
  class?: string;
}

export type DividerProps = UseDividerProps &
  /* @vue-ignore */ Omit<HTMLAttributes, 'class'>;
