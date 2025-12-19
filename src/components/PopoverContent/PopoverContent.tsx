import type { PopoverContentProps } from "./popover-content.types";
import { usePopoverContent } from "./usePopoverContent";

export function PopoverContent(props: PopoverContentProps) {
  const { popoverContentProps } = usePopoverContent(props);

  return <div {...popoverContentProps} />;
}
