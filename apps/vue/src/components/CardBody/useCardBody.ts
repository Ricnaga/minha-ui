import { computed, type HTMLAttributes } from 'vue';

import { cardBody } from '@/theme';

import type { UseCardBodyProps } from './card-body.types';

export function useCardBody(props: UseCardBodyProps) {
  const cardBodyProps = computed<HTMLAttributes>(() => ({
    class: cardBody({
      padding: props.padding,
      gap: props.gap,
      background: props.background,
      class: props.class,
    }),
  }));

  return { cardBodyProps };
}
