import { Input } from "../Input";
import { useDateRangePickerInput } from "./useDateRangePickerInput";

export function DateRangePickerInput() {
  const { inputProps } = useDateRangePickerInput();

  return <Input {...inputProps} />;
}
