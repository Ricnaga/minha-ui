import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import { useRangeCalendar } from "../../useRangeCalendar";
import { rangeCalendar } from "@/theme";

const { headerWrapper, headerButton, headerLabel } = rangeCalendar();

export function RangeCalendarHeader() {
  const { currentMonth, goToNextMonth, goToPrevMonth, locale } =
    useRangeCalendar();

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
