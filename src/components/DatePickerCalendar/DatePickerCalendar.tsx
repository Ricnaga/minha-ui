import { Calendar } from "../Calendar";
import { useDatePickerCalendar } from "./useDatePickerCalendar";

export function DatePickerCalendar() {
  const { calendarProps } = useDatePickerCalendar();

  return <Calendar {...calendarProps} />;
}
