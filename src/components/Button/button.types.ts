import type { ComponentProps } from "react";
import type { ButtonVariants } from "../../theme";

export interface UseButtonProps
  extends Omit<ComponentProps<"button">, "color">,
    ButtonVariants {}

export type ButtonProps = UseButtonProps;
