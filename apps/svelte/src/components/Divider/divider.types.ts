import type { HTMLAttributes } from 'svelte/elements';

import type { DividerVariants } from '@/theme';

export interface UseDividerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'class'>, DividerVariants {
  class?: string;
}

export type DividerProps = UseDividerProps;
