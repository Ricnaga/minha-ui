import type { HTMLAttributes } from 'svelte/elements';

import { cardActions } from '@/theme';

import type { UseCardActionsProps } from './card-actions.types';

export function useCardActions(getProps: () => UseCardActionsProps) {
  const cardActionsProps: HTMLAttributes<HTMLElement> = {
    get class() {
      const { align, direction, wrap, divider, class: className } = getProps();

      return cardActions({
        align,
        direction,
        wrap,
        divider,
        class: className,
      });
    },
  };

  return { cardActionsProps };
}
