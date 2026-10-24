import { inject, provide, ref } from 'vue';

import type { AccordionContextProps, UseAccordionProviderProps } from './accordion.types';

export const AccordionContextKey = Symbol('AccordionContext');

export function useAccordionProvider(props: UseAccordionProviderProps) {
  const type = props.type ?? 'single';
  const defaultValue = props.defaultValue ?? [];
  const accordionValue = ref<string[]>(defaultValue);

  const isControlled = props.value !== undefined;
  const currentValue = isControlled ? props.value : accordionValue.value;

  function handleUpdateValue(nextValue: string[]) {
    if (!isControlled) accordionValue.value = nextValue;
    props.onValueChange?.(nextValue);
  }

  function handleToggle(item: string) {
    if (type === 'single') {
      handleUpdateValue(currentValue?.[0] === item ? [] : [item]);
      return;
    }
    handleUpdateValue(
      currentValue?.includes(item)
        ? (currentValue?.filter((i) => i !== item) ?? [])
        : [...(currentValue ?? []), item],
    );
  }

  const context: AccordionContextProps = {
    handleToggle,
    currentValue,
    type,
    variant: props.variant,
    size: props.size,
  };

  provide(AccordionContextKey, context);

  return { children: props.children, ...context };
}

export function useAccordion(): AccordionContextProps {
  const context = inject<AccordionContextProps>(AccordionContextKey);
  if (!context) {
    throw new Error('useAccordion must be used within a AccordionProvider');
  }
  return context;
}
