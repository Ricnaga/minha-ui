import { calendar } from "@/theme";
import { useCalendarGrid } from "./useCalendarGrid";

const { gridWrapper, gridDay } = calendar();

function normalizeDate(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function CalendarGrid() {
  const { days, currentMonth, setValue, value } = useCalendarGrid();

  const ButtonDays = (buttonDaysProps: { day: Date }) => {
    const isSelected =
      value &&
      normalizeDate(buttonDaysProps.day).getTime() ===
        normalizeDate(value).getTime();

    const isOutsideMonth =
      buttonDaysProps.day.getMonth() !== currentMonth.getMonth();

    return (
      <button
        key={buttonDaysProps.day.toISOString()}
        onClick={() => setValue(buttonDaysProps.day)}
        data-selected={isSelected}
        className={gridDay({
          isSelected: !!isSelected,
          hasNotSelectedAndHasNotOutsideMonth: !isSelected && isOutsideMonth,
          hasNotSelectedAndIsOutsideMonth: !isSelected && isOutsideMonth,
        })}
      >
        {buttonDaysProps.day.getDate()}
      </button>
    );
  };

  return (
    <section className={gridWrapper()} role="region">
      {days.map((day) => (
        <ButtonDays key={day.toISOString()} day={day} />
      ))}
    </section>
  );
}
