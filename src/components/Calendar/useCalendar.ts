import { createContext, useState } from "react";
import { useContext } from "@/hooks";
import type {
  CalendarContextProps,
  UseCalendarProviderProps,
} from "./calendar.types";

export const CalendarContext = createContext<CalendarContextProps>(
  {} as CalendarContextProps
);

export function useCalendarProvider(props: UseCalendarProviderProps) {
  const {
    value: controlledValue,
    onDateChange,
    locale = "pt-BR",
    ...rest
  } = props;

  const [uncontrolledValue, setUncontrolledValue] = useState<Date | null>(null);
  const value = controlledValue ?? uncontrolledValue;

  const [currentMonth, setCurrentMonth] = useState<Date>(value ?? new Date());

  function setValue(date: Date) {
    onDateChange?.(date);
    setUncontrolledValue(date);
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
    setValue,
    currentMonth,
    goToNextMonth,
    goToPrevMonth,
    locale,
    ...rest,
  };
}

export function useCalendar() {
  return useContext({
    context: CalendarContext,
    hookName: useCalendar.name,
    providerName: CalendarContext.name,
  });
}
