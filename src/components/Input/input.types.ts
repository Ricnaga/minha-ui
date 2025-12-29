import type { InputHTMLAttributes, ReactNode } from "react";
import type { InputVariantsProps } from "@/theme";

export interface UseInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  variant?: InputVariantsProps["variant"];
}

export type InputProps = UseInputProps;
