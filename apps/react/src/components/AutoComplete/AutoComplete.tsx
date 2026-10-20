import { AutoCompleteDropdown } from '../AutoCompleteDropdown';
import { AutoCompleteProvider } from '../AutoCompleteProvider';
import type { AutoCompleteProps } from './auto-complete.types';
import { useAutoComplete } from './useAutoComplete';

export function AutoComplete(props: AutoCompleteProps) {
  const { autoCompleteProps } = useAutoComplete(props);

  return (
    <AutoCompleteProvider {...autoCompleteProps}>
      <AutoCompleteDropdown />
    </AutoCompleteProvider>
  );
}
