import type { HTMLAttributes } from 'svelte/elements';

import { skeleton } from '@/theme';

import type { UseSkeletonProps } from './skeleton.types';

export function useSkeleton(getProps: () => UseSkeletonProps) {
  const skeletonProps: HTMLAttributes<HTMLDivElement> = {
    role: 'status',
    'aria-busy': 'true',
    get class() {
      const { shape, class: className } = getProps();

      return skeleton({ shape, class: className });
    },
  };

  return { skeletonProps };
}
