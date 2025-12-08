import type { CheckboxProps } from "./checkbox.types";
import { useCheckbox } from "./useCheckbox";

export function Checkbox(props: CheckboxProps) {
  const { checkBoxProps } = useCheckbox(props);

  return <input {...checkBoxProps} />;
}
