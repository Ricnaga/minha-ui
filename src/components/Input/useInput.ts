import type {
  ActivityProps,
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
} from "react";
import type { UseInputProps } from "./input.types";
import { input } from "@/theme";

const { container, startIconWrapper, endIconWrapper, field, title } = input();

export function useInput(props: UseInputProps) {
  const {
    label,
    startIcon,
    endIcon,
    className,
    variant = "outline",
    ...rest
  } = props;

  const hasStartIcon: ActivityProps["mode"] = startIcon ? "visible" : "hidden";
  const hasEndIcon: ActivityProps["mode"] = endIcon ? "visible" : "hidden";

  const containerProps: HTMLAttributes<HTMLDivElement> = {
    className: container({ className, variant }),
    children: startIcon,
  };

  const startIconProps: HTMLAttributes<HTMLDivElement> = {
    className: startIconWrapper({ variant }),
    children: startIcon,
  };

  const endIconProps: HTMLAttributes<HTMLDivElement> = {
    className: endIconWrapper({ variant }),
    children: endIcon,
  };

  const inputProps: InputHTMLAttributes<HTMLInputElement> = {
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
    className: title({ variant }),
    children: label,
  };

  return {
    hasEndIcon,
    hasStartIcon,
    containerProps,
    startIconProps,
    endIconProps,
    inputProps,
    labelProps,
  };
}
