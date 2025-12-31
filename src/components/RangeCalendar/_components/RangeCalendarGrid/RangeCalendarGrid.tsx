import { rangeCalendar } from "@/theme";
import { useRangeCalendarGrid } from "./useRangeCalendarGrid";
import { RangeCalendarGridButton } from "./_components/RangeCalendarGridButton";

const { gridWrapper } = rangeCalendar();

export function RangeCalendarGrid() {
  const { days, currentMonth, value, setRange } = useRangeCalendarGrid();

  return (
    <section className={gridWrapper()}>
      {days.map((day) => (
        <RangeCalendarGridButton
          key={day.toISOString()}
          currentMonth={currentMonth}
          day={day}
          onDayChange={() => setRange(day)}
          value={value}
        />
      ))}
    </section>
  );
}
