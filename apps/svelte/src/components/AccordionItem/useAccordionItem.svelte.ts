import { setContext } from 'svelte';

import { useContext } from '@/runes';

import { useAccordion } from '../Accordion/useAccordion.svelte';
import type {
  AccordionItemContextProps,
  UseAccordionItemProviderProps,
} from './accordion-item.types';

export const accordionItemContext = Symbol('accordion-item');

export function useAccordionItemProvider(
  getProps: () => UseAccordionItemProviderProps,
) {
  const accordion = useAccordion();

  const context: AccordionItemContextProps = {
    get value() {
      return getProps().value;
    },
    get isOpen() {
      return accordion.currentValue.includes(getProps().value);
    },
    get variant() {
      return accordion.variant;
    },
    get size() {
      return accordion.size;
    },
  };

  setContext(accordionItemContext, context);

  return context;
}

export function useAccordionItem() {
  return useContext<AccordionItemContextProps>({
    context: accordionItemContext,
    hookName: useAccordionItem.name,
    providerName: 'AccordionItem',
  });
}
