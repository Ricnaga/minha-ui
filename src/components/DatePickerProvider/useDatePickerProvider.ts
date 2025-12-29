import { createContext } from "react";
import { useContext, useToggle } from "@/hooks";
import type {
  DatePickerProviderContextProps,
  UseDatePickerProviderProps,
} from "./date-picker-provider.types";

export const DatePickerProviderContext =
  createContext<DatePickerProviderContextProps>(
    {} as DatePickerProviderContextProps
  );

export function useDatePickerProvider(props: UseDatePickerProviderProps) {
  const { onDateChange } = props;
  const { isToggle: isOpen, handleClose, handleOpen } = useToggle();

  function handleCalendarChange(value: Date | null) {
    onDateChange(value);
  }

  const { children, ...rest } = props;

  return {
    children,
    isOpen,
    handleClose,
    handleOpen,
    handleCalendarChange,
    ...rest,
  };
}

export function useDatePickerContext() {
  return useContext({
    context: DatePickerProviderContext,
    hookName: useDatePickerContext.name,
    providerName: DatePickerProviderContext.name,
  });
}
