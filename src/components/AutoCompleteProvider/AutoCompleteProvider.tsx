import type {
  AutoCompleteProviderContextProps,
  AutoCompleteProviderProps,
} from './auto-complete-provider.types';
import {
  AutoCompleteProviderContext,
  useAutoCompleteProvider,
} from './useAutoCompleteProvider';

export function AutoCompleteProvider(props: AutoCompleteProviderProps) {
  const { children, ...value } = useAutoCompleteProvider(props);

  return (
    <AutoCompleteProviderContext.Provider
      value={value as AutoCompleteProviderContextProps}
    >
      {children}
    </AutoCompleteProviderContext.Provider>
  );
}
