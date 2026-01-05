import { calendar } from "@/theme";
import { useCalendarHeader } from "./useCalendarHeader";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";

const { headerWrapper, headerButton, headerLabel } = calendar();

export function CalendarHeader() {
  const { label, goToNextMonth, goToPrevMonth } = useCalendarHeader();

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
