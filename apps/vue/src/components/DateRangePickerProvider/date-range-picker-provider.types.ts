import type { DateRange } from '../RangeCalendar';

export type UseDateRangePickerProviderProps = {
  children?: any;
  dateValue?: DateRange;
  onRangeDateChange: (value: DateRange | null) => void;
};

export type DateRangePickerProviderProps = UseDateRangePickerProviderProps;

export interface DateRangePickerProviderContextProps {
  isOpen: boolean;
  handleClose: () => void;
  handleOpen: () => void;
  handleRangeCalendarChange: (value: DateRange | null) => void;
  dateValue?: DateRange;
  onRangeDateChange: (value: DateRange | null) => void;
}
