import { useCalendar } from "../../useCalendar";

export function useCalendarHeader() {
  const { currentMonth, goToNextMonth, goToPrevMonth, locale } = useCalendar();

  const label = new Intl.DateTimeFormat(locale, {
    month: "long",
    year: "numeric",
  }).format(currentMonth);

  return { label, goToNextMonth, goToPrevMonth };
}
