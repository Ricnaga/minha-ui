import { createContext, useState } from "react";
import { useContext } from "@/hooks";
import type {
  DateRange,
  RangeCalendarContextProps,
  UseRangeCalendarProviderProps,
} from "./range-calendar.types";

export const RangeCalendarContext = createContext<RangeCalendarContextProps>(
  {} as RangeCalendarContextProps
);

export function useRangeCalendarProvider(props: UseRangeCalendarProviderProps) {
  const { value: controlledValue, onDateChange, locale = "pt-BR" } = props;

  const [uncontrolledValue, setUncontrolledValue] = useState<DateRange>({
    from: null,
    to: null,
  });

  const value = controlledValue ?? uncontrolledValue;

  const [currentMonth, setCurrentMonth] = useState<Date>(
    value.from ?? new Date()
  );

  function setRange(date: Date) {
    // Se não tem from ou range já completo → reset
    if (!value.from || value.to) {
      const next: DateRange = { from: date, to: null };
      onDateChange?.(next);
      setUncontrolledValue(next);
      return;
    }

    // from existe, ainda não tem end
    if (date < value.from) {
      // Inverte automaticamente
      const next: DateRange = { from: date, to: value.from };
      onDateChange?.(next);
      setUncontrolledValue(next);
      return;
    }

    if (date.getTime() === value.from.getTime()) {
      // clicar na mesma data → range de 1 dia
      const next: DateRange = { from: date, to: date };
      onDateChange?.(next);
      setUncontrolledValue(next);
      return;
    }

    // caso normal: data maior que from
    const next: DateRange = { from: value.from, to: date };
    onDateChange?.(next);
    setUncontrolledValue(next);
  }

  function goToNextMonth() {
    setCurrentMonth(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
    );
  }

  function goToPrevMonth() {
    setCurrentMonth(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
    );
  }

  return {
    value,
    setRange,
    currentMonth,
    goToNextMonth,
    goToPrevMonth,
    locale,
  };
}

export function useRangeCalendar() {
  return useContext({
    context: RangeCalendarContext,
    hookName: useRangeCalendar.name,
    providerName: RangeCalendarContext.name,
  });
}
