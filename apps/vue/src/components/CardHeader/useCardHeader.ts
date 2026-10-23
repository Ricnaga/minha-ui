import { computed, type HTMLAttributes } from 'vue';

import { cardHeader } from '@/theme';

import type { UseCardHeaderProps } from './card-header.types';

export function useCardHeader(props: UseCardHeaderProps) {
  const cardHeaderProps = computed<HTMLAttributes>(() => ({
    class: cardHeader({
      align: props.align,
      divider: props.divider,
      background: props.background,
      class: props.class,
    }),
  }));

  return { cardHeaderProps };
}
