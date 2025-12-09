import type { MouseEvent } from "react";
import { useRipple } from "../../hooks";
import { iconButton } from "../../theme";
import type { IconButtonProps, UseIconButtonProps } from "./icon-button.types";

export function useIconButton(props: UseIconButtonProps) {
  const {
    size = "medium",
    radius = "full",
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

  const iconButtonProps: IconButtonProps = {
    ...rest,
    className: iconButton({ size, radius, variant, color, className }),
    onClick: handleClick,
  };

  return { iconButtonProps };
}
