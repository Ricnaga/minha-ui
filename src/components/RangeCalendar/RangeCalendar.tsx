import {
  RangeCalendarContext,
  useRangeCalendarProvider,
} from "./useRangeCalendar";
import { RangeCalendarHeader } from "./_components/RangeCalendarHeader";
import { RangeCalendarGrid } from "./_components/RangeCalendarGrid";
import type { RangeCalendarProps } from "./range-calendar.types";

export function RangeCalendar(props: RangeCalendarProps) {
  const context = useRangeCalendarProvider(props);

  return (
    <RangeCalendarContext.Provider value={context}>
      <div className="bg-white">
        <RangeCalendarHeader />
        <RangeCalendarGrid />
      </div>
    </RangeCalendarContext.Provider>
  );
}
