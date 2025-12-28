import { useDatePickerContext } from "../DatePickerProvider/useDatePickerProvider";
import type { InputProps } from "../Input";

export function useDatePickerInput() {
  const { handleOpen } = useDatePickerContext();

  const inputProps: InputProps = {
    onMouseDown: handleOpen,
  };

  return { inputProps };
}
