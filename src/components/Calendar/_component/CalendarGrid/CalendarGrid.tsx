import { useCalendar } from "../../useCalendar";

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

  return (
    <section className="grid grid-cols-7 gap-1 p-2">
      {days.map((day) => {
        const isSelected = value && day.toDateString() === value.toDateString();

        const isOutsideMonth = day.getMonth() !== currentMonth.getMonth();

        return (
          <button
            key={day.toISOString()}
            onClick={() => setValue(day)}
            className={[
              "size-8 rounded-full text-sm transition-colors cursor-pointer",

              // dia selecionado
              isSelected && "bg-sky-400 text-white",

              // fora do mês
              !isSelected && isOutsideMonth && "text-neutral-400 opacity-40",

              // hover normal
              !isSelected && !isOutsideMonth && "hover:bg-sky-100",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {day.getDate()}
          </button>
        );
      })}
    </section>
  );
}
