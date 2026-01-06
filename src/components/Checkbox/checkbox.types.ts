import type { InputHTMLAttributes } from "react";
import type { CheckboxVariants } from "@/theme";

export interface UseCheckboxProps
  extends InputHTMLAttributes<HTMLInputElement>,
    CheckboxVariants {}

export type CheckboxProps = UseCheckboxProps;
