import type { PopoverProps } from "./popover.types";
import { PopoverContext, usePopoverProvider } from "./usePopover";

export function Popover(props: PopoverProps) {
  const { children, ...rest } = usePopoverProvider(props);
  return (
    <PopoverContext.Provider value={rest}>
      <div className="relative">{children}</div>
    </PopoverContext.Provider>
  );
}
