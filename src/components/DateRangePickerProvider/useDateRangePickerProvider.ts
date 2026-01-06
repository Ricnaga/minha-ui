import { createContext } from "react";
import { useContext, useToggle } from "@/hooks";
import type {
  DateRangePickerProviderContextProps,
  UseDateRangePickerProviderProps,
} from "./date-range-picker-provider.types";
import type { DateRange } from "../RangeCalendar";

export const DateRangePickerProviderContext =
  createContext<DateRangePickerProviderContextProps>(
    {} as DateRangePickerProviderContextProps
  );

export function useDateRangePickerProvider(
  props: UseDateRangePickerProviderProps
) {
  const { onRangeDateChange } = props;
  const { isToggle: isOpen, handleClose, handleOpen } = useToggle();

  function handleRangeCalendarChange(value: DateRange | null) {
    onRangeDateChange(value);

    if (value?.start && value?.end) {
      handleClose();
    }
  }

  const { children, ...rest } = props;

  return {
    children,
    isOpen,
    handleClose,
    handleOpen,
    handleRangeCalendarChange,
    ...rest,
  };
}

export function useDateRangePickerContext() {
  return useContext({
    context: DateRangePickerProviderContext,
    hookName: useDateRangePickerContext.name,
    providerName: DateRangePickerProviderContext.name,
  });
}
