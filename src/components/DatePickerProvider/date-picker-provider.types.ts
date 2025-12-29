import type { RequiredChildren } from "@/types";
import type { useDatePickerProvider } from "./useDatePickerProvider";

export type UseDatePickerProviderProps = RequiredChildren<{
  dateValue: Date | null;
  onDateChange: (dateValue: Date | null) => void;
}>;

export type DatePickerProviderProps = UseDatePickerProviderProps;

export type DatePickerProviderContextProps = Omit<
  ReturnType<typeof useDatePickerProvider>,
  "children"
>;
