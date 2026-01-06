import type { CheckboxProps, UseCheckboxProps } from "./checkbox.types";
import { checkbox } from "@/theme";

export function useCheckbox(props: UseCheckboxProps) {
  const {
    variant = "glow",
    disabled = false,
    indeterminate = false,
    ...rest
  } = props;

  const checkBoxProps: CheckboxProps = {
    ...rest,
    type: "checkbox",
    className: checkbox({ variant, disabled, indeterminate }),
  };

  return { checkBoxProps };
}
