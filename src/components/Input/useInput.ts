import type {
  ActivityProps,
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
} from "react";
import type { UseInputProps } from "./input.types";
import { input } from "@/theme";
import type { DataTestidProps } from "@/types";

const {
  container,
  startIconWrapper,
  endIconWrapper,
  field,
  title,
  inputWrapper,
} = input();

export function useInput(props: UseInputProps) {
  const {
    label,
    startIcon,
    endIcon,
    className,
    variant = "outline",
    id = `input-${Math.random().toString(36)}`,
    ...rest
  } = props;

  const hasStartIcon: ActivityProps["mode"] = startIcon ? "visible" : "hidden";
  const hasEndIcon: ActivityProps["mode"] = endIcon ? "visible" : "hidden";

  const containerProps: HTMLAttributes<HTMLDivElement> = {
    className: container({ className, variant }),
    children: startIcon,
  };

  const startIconProps: DataTestidProps<HTMLAttributes<HTMLDivElement>> = {
    "data-testid": "input-start-icon",
    className: startIconWrapper({ variant }),
    children: startIcon,
  };

  const endIconProps: DataTestidProps<HTMLAttributes<HTMLDivElement>> = {
    "data-testid": "input-end-icon",
    className: endIconWrapper({ variant }),
    children: endIcon,
  };

  const inputWrapperProps: HTMLAttributes<HTMLDivElement> = {
    className: inputWrapper({ variant }),
    children: startIcon,
  };

  const inputProps: InputHTMLAttributes<HTMLInputElement> = {
    id,
    type: "text",
    placeholder: " ",
    className: field({
      variant,
      endIcon: !!endIcon,
      startIcon: !!startIcon,
    }),
    ...rest,
  };

  const labelProps: LabelHTMLAttributes<HTMLLabelElement> = {
    htmlFor: id,
    className: title({ variant, startIcon: !!startIcon }),
    children: label,
  };

  return {
    inputWrapperProps,
    hasEndIcon,
    hasStartIcon,
    containerProps,
    startIconProps,
    endIconProps,
    inputProps,
    labelProps,
  };
}
