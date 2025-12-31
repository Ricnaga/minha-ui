import type {
  DateRangePickerProps,
  UseDateRangePickerProps,
} from "./date-range-picker.types";

export function useDateRangePicker(props: UseDateRangePickerProps) {
  const dateRangePickerProps: DateRangePickerProps = {
    ...props,
  };

  return { dateRangePickerProps };
}
