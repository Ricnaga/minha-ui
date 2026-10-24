export type UseDatePickerProviderProps = {
  children?: any;
  dateValue?: Date | null;
  onDateChange: (value: Date | null) => void;
};

export type DatePickerProviderProps = UseDatePickerProviderProps;

export interface DatePickerProviderContextProps {
  isOpen: boolean;
  handleClose: () => void;
  handleOpen: () => void;
  handleCalendarChange: (value: Date | null) => void;
  dateValue?: Date | null;
  onDateChange: (value: Date | null) => void;
}
