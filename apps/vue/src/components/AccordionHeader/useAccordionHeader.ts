import { computed, type ButtonHTMLAttributes } from 'vue';

import { accordion } from '@/theme';

import { useAccordion } from '../Accordion/useAccordion';
import { useAccordionItem } from '../AccordionItem/useAccordionItem';
import type { AccordionHeaderProps } from './accordion-header.types';

export function useAccordionHeader(props: AccordionHeaderProps) {
  const { accordionHeader } = accordion();
  const { value: itemValue, isOpen, variant } = useAccordionItem();
  const { handleToggle } = useAccordion();

  const accordionHeaderProps = computed<ButtonHTMLAttributes>(() => ({
    ...props,
    type: props.type ?? 'button',
    'aria-expanded': isOpen.value,
    onClick: () => handleToggle(itemValue),
    class: accordionHeader({ variant: variant.value, class: props.class }),
  }));

  return { accordionHeaderProps };
}
