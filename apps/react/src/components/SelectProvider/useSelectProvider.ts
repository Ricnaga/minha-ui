import { useContext, useDisclosure } from '@/hooks';
import { createContext, useState } from 'react';
import type { SelectOptions } from '../Select';
import type {
  SelectProviderContextProps,
  UseSelectProviderProps,
} from './select-provider.types';

function resolveSelection(
  previous: Map<string, SelectOptions>,
  option: SelectOptions,
  isMultiple: boolean,
): Map<string, SelectOptions> {
  const key = option.key.toString();

  // Adiciona a seleção (limpa as anteriores quando não é múltipla)
  if (!previous.has(key)) {
    const next = isMultiple
      ? new Map(previous)
      : new Map<string, SelectOptions>();
    next.set(key, option);
    return next;
  }

  // Já selecionado: remove (múltipla) ou limpa tudo (única)
  if (isMultiple) {
    const next = new Map(previous);
    next.delete(key);
    return next;
  }

  return new Map();
}

export const SelectProviderContext = createContext<SelectProviderContextProps>(
  {} as SelectProviderContextProps,
);

export function useSelectProvider(props: UseSelectProviderProps) {
  const { isMultiple = false, onSelectChange } = props;
  const { isOpen, handleOpen, handleClose } = useDisclosure();

  const [selectedOptions, setSelectedOptions] = useState<
    Map<string, SelectOptions>
  >(new Map());

  function handleSelectChange(option: SelectOptions) {
    setSelectedOptions((prev) => {
      const nextSelection = resolveSelection(prev, option, isMultiple);

      onSelectChange(Array.from(nextSelection.values()));
      return nextSelection;
    });
  }

  return {
    isOpen,
    handleOpen,
    handleClose,
    handleSelectChange,
    selectedOptions,
    selectOption: Array.from(selectedOptions.values()),
    ...props,
  };
}

export function useSelectContext() {
  return useContext<SelectProviderContextProps>({
    context: SelectProviderContext,
    hookName: useSelectProvider.name,
    providerName: SelectProviderContext.name,
  });
}
