import { computed, type HTMLAttributes } from 'vue';

import { cardActions } from '@/theme';

import type { UseCardActionsProps } from './card-actions.types';

export function useCardActions(props: UseCardActionsProps) {
  const cardActionsProps = computed<HTMLAttributes>(() => ({
    class: cardActions({
      align: props.align,
      direction: props.direction,
      wrap: props.wrap,
      divider: props.divider,
      class: props.class,
    }),
  }));

  return { cardActionsProps };
}
