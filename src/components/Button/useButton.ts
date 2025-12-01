import { button } from "../../themes";
import type { ButtonProps, UseButtonProps } from "./button.types";

export function useButton(props: UseButtonProps) {
  const {
    size = "medium",
    radius = "medium",
    variant = "primary",
    className,
    ...rest
  } = props;

  const buttonProps: ButtonProps = {
    ...rest,
    className: button({ size, radius, variant, className }),
  };

  return { buttonProps };
}
