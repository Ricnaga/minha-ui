import { DateRangePickerPopover } from "../DateRangePickerPopover";
import { DateRangePickerProvider } from "../DateRangePickerProvider";
import type { DateRangePickerProps } from "./date-range-picker.types";
import { useDateRangePicker } from "./useDateRangePicker";

export function DateRangePicker(props: DateRangePickerProps) {
  const { dateRangePickerProps } = useDateRangePicker(props);

  return (
    <DateRangePickerProvider {...dateRangePickerProps}>
      <DateRangePickerPopover />
    </DateRangePickerProvider>
  );
}
