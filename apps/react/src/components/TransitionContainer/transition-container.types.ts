import type { HTMLAttributes } from 'react';
import type { TransitionEffect } from '@/theme';

export interface UseTransitionContainerProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  animation?: TransitionEffect | TransitionEffect[];
}

export type TransitionContainerProps = UseTransitionContainerProps;
