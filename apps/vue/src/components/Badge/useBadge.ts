import { computed, type HTMLAttributes } from 'vue';

import { badge, badgeWrapper } from '@/theme';

import type { UseBadgeProps } from './badge.types';

export function useBadge(props: UseBadgeProps) {
  const wrapperProps: HTMLAttributes = {
    class: badgeWrapper(),
  };

  const badgeProps = computed<HTMLAttributes>(() => ({
    class: badge({
      color: props.color,
      size: props.size,
      position: props.position,
      class: props.class,
    }),
  }));

  const value = computed(() => props.value ?? 0);

  return { badgeProps, value, wrapperProps };
}
