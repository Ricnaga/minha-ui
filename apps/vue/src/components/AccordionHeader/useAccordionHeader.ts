import { computed } from 'vue';

import { accordion } from '@/theme';

import { useAccordion } from '../Accordion/useAccordion';
import { useAccordionItem } from '../AccordionItem/useAccordionItem';
import type { UseAccordionHeaderProps } from './accordion-header.types';

export function useAccordionHeader(props: UseAccordionHeaderProps) {
  const { accordionHeader } = accordion();
  const { value: itemValue, isOpen, variant } = useAccordionItem();
  const { handleToggle } = useAccordion();

  const accordionHeaderProps = computed(() => ({
    ...props,
    'aria-expanded': isOpen,
    onClick: () => handleToggle(itemValue),
    class: accordionHeader({ variant, class: props.class } as Parameters<typeof accordionHeader>[0]),
  }));

  return { accordionHeaderProps };
}
