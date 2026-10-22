import type { HTMLButtonAttributes } from 'svelte/elements';

import { accordion } from '@/theme';

import { useAccordion } from '../Accordion/useAccordion.svelte';
import { useAccordionItem } from '../AccordionItem/useAccordionItem.svelte';
import type { AccordionHeaderProps } from './accordion-header.types';

export function useAccordionHeader(getProps: () => AccordionHeaderProps) {
  const { accordionHeader } = accordion();
  const item = useAccordionItem();
  const accordionState = useAccordion();

  const accordionHeaderProps: HTMLButtonAttributes = {
    get type() {
      return getProps().type ?? 'button';
    },
    get disabled() {
      return getProps().disabled;
    },
    get id() {
      return getProps().id;
    },
    get 'aria-label'() {
      return getProps()['aria-label'];
    },
    get 'aria-expanded'() {
      return item.isOpen;
    },
    get class() {
      return accordionHeader({
        variant: item.variant,
        class: getProps().class,
      });
    },
    onclick: () => accordionState.handleToggle(item.value),
  };

  return { accordionHeaderProps };
}
