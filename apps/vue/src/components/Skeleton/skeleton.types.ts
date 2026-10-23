import type { HTMLAttributes } from 'vue';

import type { SkeletonVariants } from '@/theme';

export interface UseSkeletonProps extends SkeletonVariants {
  class?: string;
}

export type SkeletonProps = UseSkeletonProps &
  /* @vue-ignore */ Omit<HTMLAttributes, 'class'>;
