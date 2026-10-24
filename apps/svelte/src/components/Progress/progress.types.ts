import type { HTMLAttributes } from 'svelte/elements';

import type { ProgressVariants } from '@/theme';

export interface UseProgressProps extends ProgressVariants, Omit<HTMLAttributes<HTMLDivElement>, 'color'> {
  value?: number;
}

export type ProgressProps = UseProgressProps;
