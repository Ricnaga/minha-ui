import { SelectDropdown } from "../SelectDropdown";
import { SelectProvider } from "../SelectProvider";
import type { SelectProps } from "./select.types";
import { useSelect } from "./useSelect";

export function Select(props: SelectProps) {
  const { selectProps } = useSelect(props);

  return (
    <SelectProvider {...selectProps}>
      <SelectDropdown />
    </SelectProvider>
  );
}
