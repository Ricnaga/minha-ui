import type { MouseEvent } from "react";
import { useRipple } from "../../hooks";
import { button } from "../../theme";
import type { ButtonProps, UseButtonProps } from "./button.types";

export function useButton(props: UseButtonProps) {
  const {
    size = "medium",
    radius = "medium",
    variant = "contained",
    color = "primary",
    className,
    onClick,
    ...rest
  } = props;

  const { handleRipple } = useRipple();

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    handleRipple(event);
    onClick?.(event);
  }

  const buttonProps: ButtonProps = {
    ...rest,
    className: button({ size, radius, variant, color, className }),
    onClick: handleClick,
  };

  return { buttonProps };
}
