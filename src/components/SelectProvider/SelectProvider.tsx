import type {
  SelectProviderContextProps,
  SelectProviderProps,
} from "./select-provider.types";
import { SelectProviderContext, useSelectProvider } from "./useSelectProvider";

export function SelectProvider(props: SelectProviderProps) {
  const { children, ...value } = useSelectProvider(props);

  return (
    <SelectProviderContext.Provider value={value as SelectProviderContextProps}>
      {children}
    </SelectProviderContext.Provider>
  );
}
