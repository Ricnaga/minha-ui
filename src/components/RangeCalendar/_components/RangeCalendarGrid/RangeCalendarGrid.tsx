import { rangeCalendar } from "@/theme";
import { useRangeCalendar } from "../../useRangeCalendar";

const { gridWrapper, gridDay } = rangeCalendar();

function getCalendarDays(month: Date) {
  const year = month.getFullYear();
  const monthIndex = month.getMonth();
  const firstDayOfMonth = new Date(year, monthIndex, 1);
  const startDay = firstDayOfMonth.getDay();

  return Array.from(
    { length: 42 },
    (_, i) => new Date(year, monthIndex, i - startDay + 1)
  );
}

function isSameDay(a?: Date | null, b?: Date | null) {
  if (!a || !b) return false;
  return a.toDateString() === b.toDateString();
}

function isInRange(day: Date, start?: Date | null, end?: Date | null) {
  if (!start || !end) return false;
  return day > start && day < end;
}

export function RangeCalendarGrid() {
  const { currentMonth, setRange, value } = useRangeCalendar();
  const days = getCalendarDays(currentMonth);

  return (
    <section className={gridWrapper()}>
      {days.map((day) => {
        const isOutsideMonth = day.getMonth() !== currentMonth.getMonth();

        const hasCompleteRange = Boolean(value.start && value.end);

        const isSelected = isSameDay(day, value.start) && !hasCompleteRange;

        const isRangeStart = hasCompleteRange && isSameDay(day, value.start);

        const isRangeEnd = hasCompleteRange && isSameDay(day, value.end);

        const inRange =
          hasCompleteRange && isInRange(day, value.start, value.end);

        return (
          <button
            key={day.toISOString()}
            onClick={() => setRange(day)}
            className={gridDay({
              isRangeStart,
              isRangeEnd,
              isInRange: inRange,
              isSelected,
              isOutsideMonth,
            })}
          >
            <span className="relative z-20">{day.getDate()}</span>
          </button>
        );
      })}
    </section>
  );
}
