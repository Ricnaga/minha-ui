import { computed, type HTMLAttributes } from 'vue';

import { divider } from '@/theme';

import type { UseDividerProps } from './divider.types';

export function useDivider(props: UseDividerProps) {
  const orientation = computed(() => props.orientation ?? 'horizontal');

  const dividerProps = computed<HTMLAttributes>(() => ({
    role: 'separator',
    'aria-orientation': orientation.value,
    class: divider({
      orientation: props.orientation,
      inset: props.inset,
      class: props.class,
    }),
  }));

  return { dividerProps };
}
