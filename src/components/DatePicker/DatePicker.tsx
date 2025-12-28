import { DatePickerPopover } from "../DatePickerPopover";
import { DatePickerProvider } from "../DatePickerProvider";
import type { DatePickerProps } from "./date-picker.types";
import { useDatePicker } from "./useDatePicker";

export function DatePicker(props: DatePickerProps) {
  const { datePickerProviderProps } = useDatePicker(props);

  return (
    <DatePickerProvider {...datePickerProviderProps}>
      <DatePickerPopover />
    </DatePickerProvider>
  );
}
