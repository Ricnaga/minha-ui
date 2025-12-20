import { popoverContent, type PopoverContentVariants } from "../../theme";
import { usePopover } from "../Popover/usePopover";
import type { UsePopoverContentProps } from "./popover-content.types";

interface PopoverContentProps extends UsePopoverContentProps {
  "data-state": "open" | "closed";
  "data-side": PopoverContentVariants["side"];
}

export function usePopoverContent(props: UsePopoverContentProps) {
  const {
    radius = "xl",
    shadow = "lg",
    animation = "slideFade",
    side = "bottom",
    ...rest
  } = props;

  const { isOpen } = usePopover();

  const popoverContentProps: PopoverContentProps = {
    ...rest,
    "data-state": isOpen ? "open" : "closed",
    "data-side": side,
    "aria-hidden": !isOpen,
    className: popoverContent({ animation, radius, shadow, side, }),
  };

  return { popoverContentProps };
}
