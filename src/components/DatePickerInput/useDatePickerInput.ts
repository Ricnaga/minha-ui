import { formatToDate } from "../../utils";
import { useDatePickerContext } from "../DatePickerProvider/useDatePickerProvider";
import type { InputProps } from "../Input";

export function useDatePickerInput() {
  const { handleOpen, dateValue } = useDatePickerContext();

  const formattedValue = formatToDate(dateValue ?? new Date());

  const inputProps: InputProps = {
    readOnly: true,
    onMouseDown: handleOpen,
    value: formattedValue,
  };

  return { inputProps };
}
