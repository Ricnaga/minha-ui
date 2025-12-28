import { createContext } from "react";
import { useContext, useToggle } from "../../hooks";
import type {
  DatePickerProviderContextProps,
  UseDatePickerProviderProps,
} from "./date-picker-provider.types";

export const DatePickerProviderContext =
  createContext<DatePickerProviderContextProps>(
    {} as DatePickerProviderContextProps
  );

export function useDatePickerProvider(props: UseDatePickerProviderProps) {
  const { isToggle: isOpen, handleClose, handleOpen } = useToggle();
  
  const { children, ...rest } = props;

  return { children, isOpen, handleClose, handleOpen, ...rest };
}

export function useDatePickerContext() {
  return useContext({
    context: DatePickerProviderContext,
    hookName: useDatePickerContext.name,
    providerName: DatePickerProviderContext.name,
  });
}
