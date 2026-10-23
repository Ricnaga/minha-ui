import type { HTMLAttributes } from 'svelte/elements';

import { cardBody } from '@/theme';

import type { UseCardBodyProps } from './card-body.types';

export function useCardBody(getProps: () => UseCardBodyProps) {
  const cardBodyProps: HTMLAttributes<HTMLDivElement> = {
    get class() {
      const { padding, gap, background, class: className } = getProps();

      return cardBody({
        padding,
        gap,
        background,
        class: className,
      });
    },
  };

  return { cardBodyProps };
}
