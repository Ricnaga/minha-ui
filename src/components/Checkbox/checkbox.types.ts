import type { InputHTMLAttributes } from "react";
import type { CheckboxVariantsProps } from "@/theme";

export interface UseCheckboxProps
  extends InputHTMLAttributes<HTMLInputElement>,
    CheckboxVariantsProps {}

export type CheckboxProps = UseCheckboxProps;
