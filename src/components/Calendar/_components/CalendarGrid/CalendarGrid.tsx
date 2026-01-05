import { calendar } from "@/theme";
import { useCalendarGrid } from "./useCalendarGrid";

const { gridWrapper, gridDay } = calendar();

export function CalendarGrid() {
  const { days, currentMonth, setValue, value } = useCalendarGrid();

  const ButtonDays = (buttonDaysProps: { day: Date }) => {
    const isSelected =
      value && buttonDaysProps.day.toDateString() === value.toDateString();

    const isOutsideMonth =
      buttonDaysProps.day.getMonth() !== currentMonth.getMonth();

    return (
      <button
        key={buttonDaysProps.day.toISOString()}
        onClick={() => setValue(buttonDaysProps.day)}
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
    <section className={gridWrapper()}>
      {days.map((day) => (
        <ButtonDays key={day.toISOString()} day={day} />
      ))}
    </section>
  );
}
