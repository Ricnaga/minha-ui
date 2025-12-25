import type { RequiredChildren } from "../../types";
import type { useDatePickerProviderProvider } from "./useDatePickerProvider";

export type UseDatePickerProviderProviderProps = RequiredChildren<{
  dateValue: Date | null;
  onDateChange: (dateValue: Date | null) => void;
}>;

export type DatePickerProviderProps = UseDatePickerProviderProviderProps;

export type DatePickerProviderContextProps = Omit<
  ReturnType<typeof useDatePickerProviderProvider>,
  "children"
>;
