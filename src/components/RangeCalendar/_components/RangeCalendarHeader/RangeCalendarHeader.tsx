import { rangeCalendar } from "@/theme";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import { useRangeCalendarHeader } from "./useRangeCalendarHeader";

const { headerWrapper, headerButton, headerLabel } = rangeCalendar();

export function RangeCalendarHeader() {
  const { goToNextMonth, goToPrevMonth, label } = useRangeCalendarHeader();

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
