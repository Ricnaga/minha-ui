import { CalendarGrid } from "./_components/CalendarGrid/CalendarGrid";
import { CalendarHeader } from "./_components/CalendarHeader/CalendarHeader";
import type { CalendarProps } from "./calendar.types";
import { CalendarContext, useCalendarProvider } from "./useCalendar";

export function Calendar(props: CalendarProps) {
  const { ...rest } = useCalendarProvider(props);

  return (
    <CalendarContext.Provider value={rest}>
      <div className="bg-white">
        <CalendarHeader />
        <CalendarGrid />
      </div>
    </CalendarContext.Provider>
  );
}
