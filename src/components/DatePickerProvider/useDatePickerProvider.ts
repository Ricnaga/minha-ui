import { createContext } from "react";
import { useContext } from "../../hooks";
import type {
  DatePickerProviderContextProps,
  UseDatePickerProviderProviderProps,
} from "./date-picker-provider.types";

export const DatePickerProviderContext =
  createContext<DatePickerProviderContextProps>(
    {} as DatePickerProviderContextProps
  );

export function useDatePickerProviderProvider(
  props: UseDatePickerProviderProviderProps
) {
  const { children, ...rest } = props;

  return { children, ...rest };
}

export function useDatePickerProvider() {
  return useContext({
    context: DatePickerProviderContext,
    hookName: useDatePickerProvider.name,
    providerName: DatePickerProviderContext.name,
  });
}
