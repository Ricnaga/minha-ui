import type { ButtonHTMLAttributes } from "react";
import type { IconButtonVariants } from "@/theme";

export interface UseIconButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    IconButtonVariants {}

export type IconButtonProps = UseIconButtonProps;
