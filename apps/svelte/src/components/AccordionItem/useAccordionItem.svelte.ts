import { getContext, setContext } from 'svelte';

import { useAccordion } from '../Accordion/useAccordion.svelte';
import type {
  AccordionItemContextProps,
  UseAccordionItemProviderProps,
} from './accordion-item.types';

const accordionItemContextKey = Symbol('accordion-item');

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

  setContext(accordionItemContextKey, context);

  return context;
}

export function useAccordionItem() {
  const context = getContext<AccordionItemContextProps>(
    accordionItemContextKey,
  );

  if (!context) {
    throw new Error(
      'useAccordionItem deve ser usado dentro de <AccordionItem>',
    );
  }

  return context;
}
