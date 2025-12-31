import { useDateRangePickerContext } from "../DateRangePickerProvider/useDateRangePickerProvider";
import type { RangeCalendarProps } from "../RangeCalendar";

export function useDateRangePickerCalendar() {
  const { handleRangeCalendarChange } = useDateRangePickerContext();

  const rangeCalendarProps: RangeCalendarProps = {
    onDateChange: handleRangeCalendarChange,
  };

  return { rangeCalendarProps };
}
