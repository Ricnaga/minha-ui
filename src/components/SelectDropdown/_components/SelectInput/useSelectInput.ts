import type { InputProps } from "src/components/Input";
import { useSelectContext } from "src/components/SelectProvider/useSelectProvider";

export function useSelectInput() {
  const { selectedOptions } = useSelectContext();

  const inputProps: InputProps = {
    readOnly: true,
    value: Array.from(selectedOptions.values())
      .map((v) => v.value)
      .join(",") ?? "",
  };

  return {
    inputProps,
  };
}
