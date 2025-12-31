import type { DateRange } from "../RangeCalendar";
import type { useDateRangePickerProvider } from "./useDateRangePickerProvider";
import type { RequiredChildren } from "@/types";

export type UseDateRangePickerProviderProps = RequiredChildren<{
  dateValue: DateRange | null;
  onRangeDateChange: (dateValue: DateRange | null) => void;
}>;

export type DateRangePickerProviderProps = UseDateRangePickerProviderProps;

export type DateRangePickerProviderContextProps = Omit<
  ReturnType<typeof useDateRangePickerProvider>,
  "children"
>;
