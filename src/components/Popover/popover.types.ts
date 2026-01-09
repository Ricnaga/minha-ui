import type { PopoverContentVariants } from "@/theme";
import type { RequiredChildren } from "@/types";
import type { usePopoverProvider } from "./usePopover";

export interface UsePopoverProviderProps
  extends PopoverContentVariants,
    RequiredChildren {
  isOpen: boolean;
  onPopoverChange: VoidFunction;
}

export type PopoverProps = UsePopoverProviderProps;

export type PopoverContextProps = Omit<
  ReturnType<typeof usePopoverProvider>,
  "children"
>;
