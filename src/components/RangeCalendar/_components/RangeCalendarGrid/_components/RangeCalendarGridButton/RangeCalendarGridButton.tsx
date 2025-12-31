import type { RangeCalendarGridButtonProps } from "./range-calendar-grid-button.types";
import { useRangeCalendarGridButton } from "./useRangeCalendarGridButton";

export function RangeCalendarGridButton(props: RangeCalendarGridButtonProps) {
  const { day, buttonProps } = useRangeCalendarGridButton(props);

  return (
    <button {...buttonProps}>
      <span className="relative z-20">{day.getDate()}</span>
    </button>
  );
}
