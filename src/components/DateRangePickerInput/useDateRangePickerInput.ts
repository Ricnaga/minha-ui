import { formatToDate } from "src/utils";
import { useDateRangePickerContext } from "../DateRangePickerProvider/useDateRangePickerProvider";
import type { InputProps } from "../Input";

export function useDateRangePickerInput() {
  const { handleOpen, dateValue } = useDateRangePickerContext();

  const formattedValue = Object.values(dateValue ?? {})
    .map((value) => formatToDate(value ?? new Date()))
    .join(" - ");

  const inputProps: InputProps = {
    readOnly: true,
    onMouseDown: handleOpen,
    value: formattedValue,
  };

  return { inputProps };
}
