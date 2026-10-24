import type { SelectProps } from './select.types';

export function useSelect(props: SelectProps) {
  return { selectProps: props };
}
