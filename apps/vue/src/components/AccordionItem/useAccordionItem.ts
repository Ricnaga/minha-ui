import { inject, provide } from 'vue';

import type { AccordionItemContextProps, UseAccordionItemProviderProps } from './accordion-item.types';

export const AccordionItemContextKey = Symbol('AccordionItemContext');

export function useAccordionItemProvider(props: UseAccordionItemProviderProps) {
  return { children: props.children, value: props.value };
}

export function useAccordionItem(): AccordionItemContextProps {
  const context = inject<AccordionItemContextProps>(AccordionItemContextKey);
  if (!context) {
    throw new Error('useAccordionItem must be used within a AccordionItemProvider');
  }
  return context;
}

export function provideAccordionItem(context: AccordionItemContextProps) {
  provide(AccordionItemContextKey, context);
}
