import type { SelectProps, UseSelectProps } from "./select.types";

export function useSelect(props: UseSelectProps) {
  const { isMultiple = false, isRenderChips = false, ...rest } = props;

  const selectProps: SelectProps = {
    isMultiple,
    isRenderChips,
    ...rest,
  };

  return { selectProps };
}
