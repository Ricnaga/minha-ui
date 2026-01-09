import type { HTMLAttributes } from "react";
import type { UseRangeCalendarGridButtonProps } from "./range-calendar-grid-button.types";
import { rangeCalendar } from "@/theme";

const { gridDay } = rangeCalendar();

function isSameDay(a?: Date | null, b?: Date | null) {
  if (!a || !b) return false;
  return a.toDateString() === b.toDateString();
}

function isInRange(day: Date, start?: Date | null, end?: Date | null) {
  if (!start || !end) return false;
  return day > start && day < end;
}

export function useRangeCalendarGridButton(
  props: UseRangeCalendarGridButtonProps
) {
  const { currentMonth, day, value, onDayChange } = props;

  const isOutsideMonth = day.getMonth() !== currentMonth.getMonth();

  const hasCompleteRange = Boolean(value.from && value.to);

  const isSelected = isSameDay(day, value.from) && !hasCompleteRange;

  const isRangeStart = hasCompleteRange && isSameDay(day, value.from);

  const isRangeEnd = hasCompleteRange && isSameDay(day, value.to);

  const inRange = hasCompleteRange && isInRange(day, value.from, value.to);

  const buttonProps: HTMLAttributes<HTMLButtonElement> = {
    className: gridDay({
      isRangeStart,
      isRangeEnd,
      isInRange: inRange,
      isSelected,
      isOutsideMonth,
    }),
    onClick: onDayChange,
  };

  return {
    day,
    buttonProps,
  };
}
