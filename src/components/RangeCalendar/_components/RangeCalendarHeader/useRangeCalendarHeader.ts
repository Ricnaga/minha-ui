import { useRangeCalendar } from "../../useRangeCalendar";

export function useRangeCalendarHeader() {
  const { currentMonth, goToNextMonth, goToPrevMonth, locale } =
    useRangeCalendar();

  const label = new Intl.DateTimeFormat(locale, {
    month: "long",
    year: "numeric",
  }).format(currentMonth);

  return { goToNextMonth, goToPrevMonth, label };
}
