// CalendarHeader.tsx

import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import { useCalendar } from "../../useCalendar";

export function CalendarHeader() {
  const { currentMonth, goToNextMonth, goToPrevMonth, locale } = useCalendar();

  const label = new Intl.DateTimeFormat(locale, {
    month: "long",
    year: "numeric",
  }).format(currentMonth);

  return (
    <header className="flex items-center justify-between p-2">
      <button
        onClick={goToPrevMonth}
        className="transition-all rounded-full bg-sky-50 p-2 hover:bg-sky-100 cursor-pointer"
      >
        <CaretLeftIcon />
      </button>
      <h2 className="capitalize font-medium">{label}</h2>
      <button
        onClick={goToNextMonth}
        className="transition-all rounded-full bg-sky-50 p-2 hover:bg-sky-100 cursor-pointer"
      >
        <CaretRightIcon />
      </button>
    </header>
  );
}
