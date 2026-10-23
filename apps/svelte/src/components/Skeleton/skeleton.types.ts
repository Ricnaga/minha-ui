import type { HTMLAttributes } from 'svelte/elements';

import type { SkeletonVariants } from '@/theme';

export interface UseSkeletonProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'class'>, SkeletonVariants {
  class?: string;
}

export type SkeletonProps = UseSkeletonProps;
