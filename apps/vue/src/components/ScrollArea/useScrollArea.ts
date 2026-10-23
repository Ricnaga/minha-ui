import { computed, type HTMLAttributes } from 'vue';

import { scrollArea } from '@/theme';

import type { UseScrollAreaProps } from './scroll-area.types';

export function useScrollArea(props: UseScrollAreaProps) {
  const role = computed(() => props.role ?? 'region');

  const tabindex = computed(() => props.tabindex ?? 0);

  const scrollAreaProps = computed<HTMLAttributes>(() => ({
    role: role.value,
    tabindex: tabindex.value,
    class: scrollArea({
      orientation: props.orientation,
      size: props.size,
      class: props.class,
    }),
  }));

  return { scrollAreaProps };
}
