import { inject, provide, ref } from 'vue';

import { useDisclosure } from '@/composables';

import type { SelectOptions } from '../Select';
import type { SelectProviderContextProps, UseSelectProviderProps } from './select-provider.types';

function resolveSelection(
  previous: Map<string, SelectOptions>,
  option: SelectOptions,
  isMultiple: boolean,
): Map<string, SelectOptions> {
  const key = option.key.toString();
  if (!previous.has(key)) {
    const next = isMultiple ? new Map(previous) : new Map<string, SelectOptions>();
    next.set(key, option);
    return next;
  }
  if (isMultiple) {
    const next = new Map(previous);
    next.delete(key);
    return next;
  }
  return new Map();
}

export const SelectProviderContextKey = Symbol('SelectProviderContext');

export function useSelectProvider(props: UseSelectProviderProps) {
  const isMultiple = props.isMultiple ?? false;
  const { isOpen, handleOpen, handleClose } = useDisclosure();
  const selectedOptions = ref<Map<string, SelectOptions>>(new Map());

  function handleSelectChange(option: SelectOptions) {
    selectedOptions.value = resolveSelection(selectedOptions.value, option, isMultiple);
    props.onSelectChange(Array.from(selectedOptions.value.values()));
  }

  const context = {
    ...props,
    isOpen: isOpen.value,
    handleOpen,
    handleClose,
    handleSelectChange,
    selectedOptions: selectedOptions.value,
    selectOption: Array.from(selectedOptions.value.values()),
  } as SelectProviderContextProps;

  provide(SelectProviderContextKey, context);

  return { children: props.children, ...context };
}

export function useSelectContext(): SelectProviderContextProps {
  const context = inject<SelectProviderContextProps>(SelectProviderContextKey);
  if (!context) {
    throw new Error('useSelectContext must be used within a SelectProvider');
  }
  return context;
}
