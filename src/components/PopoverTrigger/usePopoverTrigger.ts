import { usePopover } from "../Popover/usePopover";
import type { UsePopoverTriggerProps } from "./popover-trigger.types";

export function usePopoverTrigger(props: UsePopoverTriggerProps) {
  const { children } = props;
  const { onPopoverChange } = usePopover();

  return { children, onPopoverChange };
}
