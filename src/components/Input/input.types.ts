import type { InputHTMLAttributes, ReactNode } from "react";
import type { InputVariants } from "@/theme";

export interface UseInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  variant?: InputVariants["variant"];
}

export type InputProps = UseInputProps;
