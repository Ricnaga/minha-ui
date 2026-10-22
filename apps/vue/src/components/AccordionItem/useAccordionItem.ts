import { computed, provide, type InjectionKey } from 'vue';

import { useContext } from '@/composables';

import { useAccordion } from '../Accordion/useAccordion';
import type {
  AccordionItemContextProps,
  UseAccordionItemProviderProps,
} from './accordion-item.types';

export const accordionItemContext: InjectionKey<AccordionItemContextProps> =
  Symbol('accordion-item');

export function useAccordionItemProvider(props: UseAccordionItemProviderProps) {
  const { currentValue, variant, size } = useAccordion();
  const isOpen = computed(() => currentValue.value.includes(props.value));

  const context: AccordionItemContextProps = {
    value: props.value,
    isOpen,
    variant,
    size,
  };

  provide(accordionItemContext, context);

  return context;
}

export function useAccordionItem() {
  return useContext({
    context: accordionItemContext,
    hookName: useAccordionItem.name,
    providerName: 'AccordionItem',
  });
}
