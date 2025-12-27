import { cloneElement } from "react";
import type { PopoverTriggerProps } from "./popover-trigger.types";
import { usePopoverTrigger } from "./usePopoverTrigger";

export function PopoverTrigger(props: PopoverTriggerProps) {
  const { children, onPopoverChange } = usePopoverTrigger(props);

  return cloneElement(children, {
    onMouseDown: (event) => {
      event.preventDefault();
      children.props.onClick?.(event);
      onPopoverChange();
    },
  });
}
