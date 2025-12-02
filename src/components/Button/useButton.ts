import { button } from "../../theme";
import type { ButtonProps, UseButtonProps } from "./button.types";

export function useButton(props: UseButtonProps) {
  const {
    size = "medium",
    radius = "medium",
    variant = "contained",
    color = "primary",
    className,
    ...rest
  } = props;

  const buttonProps: ButtonProps = {
    ...rest,
    className: button({ size, radius, variant, color, className }),
  };

  return { buttonProps };
}
