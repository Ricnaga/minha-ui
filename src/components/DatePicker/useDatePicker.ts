import type { UseDatePickerProps } from "./date-picker.types";
import type { DatePickerProviderProps } from "../DatePickerProvider";

export function useDatePicker(props: UseDatePickerProps) {
  const datePickerProviderProps: DatePickerProviderProps = {
    ...props,
  };

  return { datePickerProviderProps };
}
