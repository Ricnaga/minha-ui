import type { ComponentProps } from "react";
import type { ButtonVariants } from "../../themes";

export interface UseButtonProps
  extends ComponentProps<"button">,
    ButtonVariants {}

export type ButtonProps = UseButtonProps;
