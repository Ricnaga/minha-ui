import { useCalendar } from "../../useCalendar";

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

export function useCalendarGrid() {
  const { currentMonth, setValue, value } = useCalendar();
  const days = getCalendarDays(currentMonth);

  return { days, currentMonth, setValue, value };
}
