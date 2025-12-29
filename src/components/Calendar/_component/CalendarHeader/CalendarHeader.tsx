// CalendarHeader.tsx

import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import { useCalendar } from "../../useCalendar";
import { calendar } from "@/theme";

const { headerWrapper, headerButton, headerLabel } = calendar();

export function CalendarHeader() {
  const { currentMonth, goToNextMonth, goToPrevMonth, locale } = useCalendar();

  const label = new Intl.DateTimeFormat(locale, {
    month: "long",
    year: "numeric",
  }).format(currentMonth);

  return (
    <header className={headerWrapper()}>
      <button onClick={goToPrevMonth} className={headerButton()}>
        <CaretLeftIcon />
      </button>
      <h2 className={headerLabel()}>{label}</h2>
      <button onClick={goToNextMonth} className={headerButton()}>
        <CaretRightIcon />
      </button>
    </header>
  );
}
