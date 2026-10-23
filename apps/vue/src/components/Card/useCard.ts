import { computed, type HTMLAttributes } from 'vue';

import { card } from '@/theme';

import type { UseCardProps } from './card.types';

export function useCard(props: UseCardProps) {
  const cardProps = computed<HTMLAttributes>(() => ({
    class: card({
      radius: props.radius,
      shadow: props.shadow,
      class: props.class,
    }),
  }));

  return { cardProps };
}
