import type { MouseEvent } from "react";
import { useRipple } from "@/hooks";
import { iconButton } from "@/theme";
import type { IconButtonProps, UseIconButtonProps } from "./icon-button.types";

export function useIconButton(props: UseIconButtonProps) {
  const {
    size = "medium",
    radius = "full",
    variant = "contained",
    color = "primary",
    isLoading = false,
    className,
    onClick,
    children,
    disabled,
    ...rest
  } = props;

  const { handleRipple } = useRipple();

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    handleRipple(event);
    onClick?.(event);
  }

  const iconButtonProps: IconButtonProps = {
    ...rest,
    disabled: isLoading ?? disabled,
    className: iconButton({
      size,
      radius,
      variant,
      color,
      className,
      isLoading,
    }),
    onClick: handleClick,
  };

  return { iconButtonProps, children, isLoading };
}
