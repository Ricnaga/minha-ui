import { useDisclosure } from "@/hooks";
import { tooltip } from "@/theme";
import { type HTMLAttributes } from "react";
import { type TooltipProps, type UseTooltipProps } from "./tooltip.types";

export function useTooltip(props: UseTooltipProps) {
  const {
    className,
    color = "black",
    position = "top",
    children,
    content,
    ...rest
  } = props;

  const { handleClose, handleOpen, isOpen } = useDisclosure();

  const wrapperProps: HTMLAttributes<HTMLDivElement> = {
    className: "relative inline-block",
    onMouseEnter: handleOpen,
    onMouseLeave: handleClose,
    onFocus: handleOpen,
    onBlur: handleClose,
  };

  const tooltipProps: Omit<TooltipProps, "content"> = {
    ...rest,
    children: content,
    role: "tooltip",
    "aria-hidden": !isOpen,
    className: tooltip({
      color,
      position,
      className,
    }),
  };

  return { wrapperProps, children, tooltipProps };
}
