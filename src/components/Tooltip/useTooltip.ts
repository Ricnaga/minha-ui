import { useState, type HTMLAttributes } from "react";
import { tooltip } from "@/theme";
import { type TooltipProps, type UseTooltipProps } from "./tooltip.types";

export function useTooltip(props: UseTooltipProps) {
  const {
    className,
    color = "black",
    position = "top",
    children,
    description,
    ...rest
  } = props;

  const [isVisible, setAsVisible] = useState<boolean>(false);

  const wrapperProps: HTMLAttributes<HTMLDivElement> = {
    className: "relative inline-block",
    onMouseEnter: () => setAsVisible(true),
    onMouseLeave: () => setAsVisible(false),
  };

  const tooltipProps: Omit<TooltipProps, "description"> = {
    ...rest,
    children: description,
    className: tooltip({
      color,
      position,
      isVisible,
      className,
    }),
  };

  return { wrapperProps, children, tooltipProps };
}
