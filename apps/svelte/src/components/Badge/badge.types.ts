import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

import type { BadgeVariants } from '@/theme';

export interface UseBadgeProps
  extends
    Omit<HTMLAttributes<HTMLDivElement>, 'class' | 'color'>,
    BadgeVariants {
  class?: string;
  value?: string | number;
}

export interface BadgeProps extends UseBadgeProps {
  children?: Snippet;
}
