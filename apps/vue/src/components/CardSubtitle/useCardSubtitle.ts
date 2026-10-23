import { computed, type HTMLAttributes } from 'vue';

import { cardSubtitle } from '@/theme';

import type { UseCardSubtitleProps } from './card-subtitle.types';

export function useCardSubtitle(props: UseCardSubtitleProps) {
  const cardSubtitleProps = computed<HTMLAttributes>(() => ({
    class: cardSubtitle({
      size: props.size,
      weight: props.weight,
      color: props.color,
      align: props.align,
      class: props.class,
    }),
  }));

  return { cardSubtitleProps };
}
