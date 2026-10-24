import type { HTMLAttributes } from 'vue';

import type { ProgressVariants } from '@/theme';

export interface UseProgressProps extends ProgressVariants, /* @vue-ignore */ Omit<HTMLAttributes, 'color'> {
  value?: number;
  class?: string;
}

export type ProgressProps = UseProgressProps;
