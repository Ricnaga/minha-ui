import { computed, type HTMLAttributes } from 'vue';

import { skeleton } from '@/theme';

import type { UseSkeletonProps } from './skeleton.types';

export function useSkeleton(props: UseSkeletonProps) {
  const skeletonProps = computed<HTMLAttributes>(() => ({
    role: 'status',
    'aria-busy': 'true',
    class: skeleton({ shape: props.shape, class: props.class }),
  }));

  return { skeletonProps };
}
