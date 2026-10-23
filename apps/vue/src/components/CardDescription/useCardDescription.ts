import { computed, type HTMLAttributes } from 'vue';

import { cardDescription } from '@/theme';

import type { UseCardDescriptionProps } from './card-description.types';

export function useCardDescription(props: UseCardDescriptionProps) {
  const cardDescriptionProps = computed<HTMLAttributes>(() => ({
    class: cardDescription({
      size: props.size,
      weight: props.weight,
      color: props.color,
      align: props.align,
      class: props.class,
    }),
  }));

  return { cardDescriptionProps };
}
