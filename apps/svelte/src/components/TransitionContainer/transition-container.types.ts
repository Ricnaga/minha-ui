import type { HTMLAttributes } from 'svelte/elements';

import type { TransitionContainerVariants, TransitionEffect } from '@/theme';

export interface UseTransitionContainerProps
  extends
    Omit<HTMLAttributes<HTMLDivElement>, 'class' | 'aria-hidden' | 'inert'>,
    TransitionContainerVariants {
  isOpen: boolean;
  animation?: TransitionEffect | TransitionEffect[];
  class?: string;
  'aria-hidden'?: HTMLAttributes<HTMLDivElement>['aria-hidden'];
  inert?: boolean;
}

export type TransitionContainerProps = UseTransitionContainerProps;
