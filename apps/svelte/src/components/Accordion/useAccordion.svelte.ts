import { getContext, setContext } from 'svelte';

import type {
  AccordionContextProps,
  UseAccordionProviderProps,
} from './accordion.types';

const accordionContextKey = Symbol('accordion');

// O provider recebe um getter das props (e não as props diretamente) para
// que os valores lidos dentro do contexto continuem reativos: em Svelte 5 a
// referência a `$props()` fora de um closure é capturada no momento da
// inicialização.
export function useAccordionProvider(
  getProps: () => UseAccordionProviderProps,
) {
  let internalValue = $state<string[]>(getProps().defaultValue ?? []);

  function getCurrentValue() {
    const { value } = getProps();
    return value !== undefined ? value : internalValue;
  }

  const handleUpdateValue = (nextValue: string[]) => {
    const { value, onValueChange } = getProps();

    if (value === undefined) internalValue = nextValue;
    onValueChange?.(nextValue);
  };

  function handleToggle(item: string) {
    const currentValue = getCurrentValue();

    if (getProps().type !== 'multiple') {
      handleUpdateValue(currentValue[0] === item ? [] : [item]);
      return;
    }

    handleUpdateValue(
      currentValue.includes(item)
        ? currentValue.filter((value) => value !== item)
        : [...currentValue, item],
    );
  }

  const context: AccordionContextProps = {
    get currentValue() {
      return getCurrentValue();
    },
    get type() {
      return getProps().type ?? 'single';
    },
    get variant() {
      return getProps().variant;
    },
    get size() {
      return getProps().size;
    },
    handleToggle,
  };

  setContext(accordionContextKey, context);

  return context;
}

export function useAccordion() {
  const context = getContext<AccordionContextProps>(accordionContextKey);

  if (!context) {
    throw new Error('useAccordion deve ser usado dentro de <Accordion>');
  }

  return context;
}
