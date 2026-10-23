import type { HTMLAttributes } from 'svelte/elements';

import { cardHeader } from '@/theme';

import type { UseCardHeaderProps } from './card-header.types';

export function useCardHeader(getProps: () => UseCardHeaderProps) {
  const cardHeaderProps: HTMLAttributes<HTMLElement> = {
    get class() {
      const { align, divider, background, class: className } = getProps();

      return cardHeader({
        align,
        divider,
        background,
        class: className,
      });
    },
  };

  return { cardHeaderProps };
}
