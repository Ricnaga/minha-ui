import type { ButtonHTMLAttributes } from "react";
import type { ButtonVariants } from "@/theme";

export interface UseButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    ButtonVariants {
  isLoading?: boolean;
}

export type ButtonProps = UseButtonProps;
