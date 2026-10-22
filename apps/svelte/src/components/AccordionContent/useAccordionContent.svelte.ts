import type { HTMLAttributes } from 'svelte/elements';

import { accordion } from '@/theme';

import { useAccordionItem } from '../AccordionItem/useAccordionItem.svelte';

export function useAccordionContent() {
  const { accordionContentWrapper, accordionContentInner } = accordion();
  const item = useAccordionItem();

  const accordionContentWrapperProps: HTMLAttributes<HTMLDivElement> = {
    get 'data-state'() {
      return item.isOpen ? 'open' : 'closed';
    },
    get class() {
      return accordionContentWrapper({ variant: item.variant });
    },
    get style() {
      return `grid-template-rows: ${item.isOpen ? '1fr' : '0fr'}`;
    },
  };

  const accordionContentInnerProps: HTMLAttributes<HTMLDivElement> = {
    get class() {
      return accordionContentInner({ variant: item.variant });
    },
  };

  return { accordionContentWrapperProps, accordionContentInnerProps };
}
