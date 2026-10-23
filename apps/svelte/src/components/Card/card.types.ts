import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

import type { CardVariants } from '@/theme';

export interface UseCardProps
  extends
    Omit<HTMLAttributes<HTMLElement>, 'class' | 'radius' | 'shadow'>,
    CardVariants {
  class?: string;
}

export interface CardProps extends UseCardProps {
  children?: Snippet;
}
