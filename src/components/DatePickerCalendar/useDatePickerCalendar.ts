import type { CalendarProps } from "../Calendar";
import { useDatePickerContext } from "../DatePickerProvider/useDatePickerProvider";

export function useDatePickerCalendar() {
  const { handleCalendarChange } = useDatePickerContext();

  const calendarProps: CalendarProps = {
    onDateChange: handleCalendarChange,
  };

  return { calendarProps };
}
