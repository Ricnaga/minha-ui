import { Input } from "../Input";
import { useDatePickerInput } from "./useDatePickerInput";

export function DatePickerInput() {
  const { inputProps } = useDatePickerInput();

  return <Input {...inputProps} />;
}
