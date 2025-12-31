import { useRangeCalendar } from "../../useRangeCalendar";

function getCalendarDays(month: Date) {
  const year = month.getFullYear();
  const monthIndex = month.getMonth();
  const firstDayOfMonth = new Date(year, monthIndex, 1);
  const startDay = firstDayOfMonth.getDay();

  return Array.from(
    { length: 42 },
    (_, i) => new Date(year, monthIndex, i - startDay + 1)
  );
}

export function useRangeCalendarGrid() {
  const { currentMonth, setRange, value } = useRangeCalendar();
  const days = getCalendarDays(currentMonth);

  return { days, currentMonth, value, setRange };
}
