import { Input, PopoverTrigger } from "@/components";
import { useSelectInput } from "./useSelectInput";

export function SelectInput() {
  const { inputProps } = useSelectInput();

  return (
    <PopoverTrigger>
      <Input {...inputProps} />
    </PopoverTrigger>
  );
}
