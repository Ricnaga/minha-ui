import { computed, inject, provide, ref, type InjectionKey } from 'vue';

import type {
  AccordionContextProps,
  UseAccordionProviderProps,
} from './accordion.types';

export const accordionContext: InjectionKey<AccordionContextProps> =
  Symbol('accordion');

export function useAccordionProvider(
  props: UseAccordionProviderProps,
  onValueChange: (value: string[]) => void,
) {
  const internalValue = ref<string[]>(props.defaultValue ?? []);
  const isControlled = computed(() => props.value !== undefined);

  const currentValue = computed<string[]>(() =>
    isControlled.value ? (props.value ?? []) : internalValue.value,
  );

  const handleUpdateValue = (nextValue: string[]) => {
    if (!isControlled.value) internalValue.value = nextValue;
    onValueChange(nextValue);
  };

  function handleToggle(item: string) {
    if (props.type !== 'multiple') {
      handleUpdateValue(currentValue.value[0] === item ? [] : [item]);
      return;
    }

    handleUpdateValue(
      currentValue.value.includes(item)
        ? currentValue.value.filter((value) => value !== item)
        : [...currentValue.value, item],
    );
  }

  const context: AccordionContextProps = {
    currentValue,
    handleToggle,
    type: computed(() => props.type ?? 'single'),
    variant: computed(() => props.variant),
    size: computed(() => props.size),
  };

  provide(accordionContext, context);

  return context;
}

export function useAccordion() {
  const context = inject(accordionContext);

  if (!context) {
    throw new Error('useAccordion deve ser usado dentro de <Accordion>');
  }

  return context;
}
