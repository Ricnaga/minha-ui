import { Activity } from "react";
import type { InputProps } from "./input.types";
import { useInput } from "./useInput";

export function Input(props: InputProps) {
  const {
    containerProps,
    endIconProps,
    hasEndIcon,
    hasStartIcon,
    inputProps,
    labelProps,
    startIconProps,
  } = useInput(props);
  return (
    <div {...containerProps}>
      <Activity mode={hasStartIcon}>
        <div {...startIconProps} />
      </Activity>

      <input {...inputProps} />

      <Activity mode={hasEndIcon}>
        <div {...endIconProps} />
      </Activity>

      <label {...labelProps} />
    </div>
  );
}
