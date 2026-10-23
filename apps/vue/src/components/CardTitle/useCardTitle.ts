import { computed, type HTMLAttributes } from 'vue';

import { cardTitle } from '@/theme';

import type { HeadingTag, UseCardTitleProps } from './card-title.types';

export function useCardTitle(props: UseCardTitleProps) {
  const tag = computed<HeadingTag>(() => props.as ?? 'h2');

  const cardTitleProps = computed<HTMLAttributes>(() => ({
    class: cardTitle({
      size: props.size,
      weight: props.weight,
      color: props.color,
      align: props.align,
      class: props.class,
    }),
  }));

  return { cardTitleProps, tag };
}
