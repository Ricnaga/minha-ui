import { RangeCalendar } from "../RangeCalendar";
import { useDateRangePickerCalendar } from "./useDateRangePickerCalendar";

export function DateRangePickerCalendar() {
  const { rangeCalendarProps } = useDateRangePickerCalendar();

  return <RangeCalendar {...rangeCalendarProps} />;
}
