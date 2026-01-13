import { useContext, useDisclosure } from "@/hooks";
import { createContext, useState } from "react";
import type { SelectOptions } from "../Select";
import type {
  SelectProviderContextProps,
  UseSelectProviderProps,
} from "./select-provider.types";

export const SelectProviderContext = createContext<SelectProviderContextProps>(
  {} as SelectProviderContextProps
);

export function useSelectProvider(props: UseSelectProviderProps) {
  const { isMultiple, onSelectChange } = props;
  const { isOpen, handleOpen, handleClose } = useDisclosure();

  const [selectOption, setSelectedOption] = useState<SelectOptions[]>([]);

  function handleSelectChange(option: SelectOptions) {
    const foundedOption = selectOption.findIndex(
      (optionValue) => optionValue.key === option.key
    );

    if (foundedOption === -1) {
      if (isMultiple) {
        const formattedOptions = [...selectOption, option];
        setSelectedOption(formattedOptions);
        onSelectChange(formattedOptions);
        return;
      }

      setSelectedOption([option]);
      onSelectChange([option]);
      return;
    }

    
    if (isMultiple) {
      const filteredOptions = selectOption.filter(
        (optionValue) => optionValue.key !== option.key
      );

      setSelectedOption(filteredOptions);
      onSelectChange(filteredOptions);
      return
    }

    setSelectedOption([]);
    onSelectChange([]);
  }

  return {
    isOpen,
    handleOpen,
    handleClose,
    handleSelectChange,
    selectOption,
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
