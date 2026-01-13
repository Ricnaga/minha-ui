import type { InputProps } from "src/components/Input";
import { useSelectContext } from "src/components/SelectProvider/useSelectProvider";

export function useSelectInput() {
  const { selectOption } = useSelectContext();

  const inputProps: InputProps = {
    readOnly: true,
    value: selectOption.map((values) => values.value).join(",") ?? "",
  };

  return {
    inputProps,
  };
}
