import { computed, type HTMLAttributes } from 'vue';

import { cardFooter } from '@/theme';

import type { UseCardFooterProps } from './card-footer.types';

export function useCardFooter(props: UseCardFooterProps) {
  const cardFooterProps = computed<HTMLAttributes>(() => ({
    class: cardFooter({
      align: props.align,
      wrap: props.wrap,
      divider: props.divider,
      class: props.class,
    }),
  }));

  return { cardFooterProps };
}
