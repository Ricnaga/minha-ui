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

  const [selectedOptions, setSelectedOptions] = useState<Map<string, SelectOptions>>(new Map());

  function handleSelectChange(option: SelectOptions) {
    setSelectedOptions((prev) => {
      const newMap = new Map(prev);

      if (newMap.has(option.key.toString())) {
        if (isMultiple) {
          newMap.delete(option.key.toString());
        } else {
          newMap.clear();
        }
      } else {
        if (!isMultiple) {
          newMap.clear();
        }
        newMap.set(option.key.toString(), option);
      }

      onSelectChange(Array.from(newMap.values()));
      return newMap;
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
