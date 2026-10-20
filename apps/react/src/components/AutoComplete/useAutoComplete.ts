import type {
  AutoCompleteProps,
  UseAutoCompleteProps,
} from './auto-complete.types';

export function useAutoComplete(props: UseAutoCompleteProps) {
  const autoCompleteProps: AutoCompleteProps = {
    ...props,
  };

  return { autoCompleteProps };
}
