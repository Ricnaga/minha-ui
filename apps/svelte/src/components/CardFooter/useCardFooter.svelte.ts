import type { HTMLAttributes } from 'svelte/elements';

import { cardFooter } from '@/theme';

import type { UseCardFooterProps } from './card-footer.types';

export function useCardFooter(getProps: () => UseCardFooterProps) {
  const cardFooterProps: HTMLAttributes<HTMLDivElement> = {
    get class() {
      const { align, wrap, divider, class: className } = getProps();

      return cardFooter({
        align,
        wrap,
        divider,
        class: className,
      });
    },
  };

  return { cardFooterProps };
}
