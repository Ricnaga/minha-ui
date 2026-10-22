import { computed } from 'vue';

import { accordion } from '@/theme';

import { useAccordionItem } from '../AccordionItem/useAccordionItem';

export function useAccordionContent() {
  const { accordionContentWrapper, accordionContentInner } = accordion();
  const { isOpen, variant } = useAccordionItem();

  const accordionContentWrapperProps = computed(() => ({
    'data-state': isOpen.value ? 'open' : 'closed',
    class: accordionContentWrapper({ variant: variant.value }),
    style: { gridTemplateRows: isOpen.value ? '1fr' : '0fr' },
  }));

  const accordionContentInnerProps = computed(() => ({
    class: accordionContentInner({ variant: variant.value }),
  }));

  return { accordionContentWrapperProps, accordionContentInnerProps };
}
