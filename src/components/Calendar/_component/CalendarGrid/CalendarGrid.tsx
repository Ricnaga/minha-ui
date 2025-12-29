import { calendar } from "@/theme";
import { useCalendar } from "../../useCalendar";

const { gridWrapper, gridDay } = calendar();

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

export function CalendarGrid() {
  const { currentMonth, setValue, value } = useCalendar();
  const days = getCalendarDays(currentMonth);

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
