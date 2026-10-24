import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

import type { TooltipVariants } from '@/theme';

export interface UseTooltipProps extends TooltipVariants, Omit<HTMLAttributes<HTMLDivElement>, 'color' | 'content'> {
  content: Snippet | string;
}

export type TooltipProps = UseTooltipProps;
