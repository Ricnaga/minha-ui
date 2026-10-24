import { useDatePickerContext } from '../DatePickerProvider/useDatePickerProvider';

export function useDatePickerCalendar() {
  const { handleCalendarChange } = useDatePickerContext();

  const calendarProps = {
    onDateChange: handleCalendarChange,
  };

  return { calendarProps };
}
