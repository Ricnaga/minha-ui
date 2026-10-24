import { useDateRangePickerContext } from '../DateRangePickerProvider/useDateRangePickerProvider';
export function useDateRangePickerCalendar() {
    const { handleRangeCalendarChange } = useDateRangePickerContext();
    const rangeCalendarProps = {
        onDateChange: handleRangeCalendarChange,
    };
    return { rangeCalendarProps };
}
