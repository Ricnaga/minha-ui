import type { HTMLAttributes } from 'vue';

import type { TooltipVariants } from '@/theme';

export interface UseTooltipProps extends TooltipVariants, /* @vue-ignore */ Omit<HTMLAttributes, 'color' | 'content'> {
  content: any;
  class?: string;
}

export type TooltipProps = UseTooltipProps;
