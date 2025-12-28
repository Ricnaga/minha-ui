import type { DatePickerProviderProps } from "../DatePickerProvider";
import type { UseDatePickerProps } from "./date-picker.types";

export function useDatePicker(props: UseDatePickerProps) {
  const datePickerProviderProps: DatePickerProviderProps = {
    ...props,
  };

  return { datePickerProviderProps };
}
