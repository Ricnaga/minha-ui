import { createContext } from "react";
import { useContext } from "../../hooks";
import type {
  PopoverContextProps,
  UsePopoverProviderProps,
} from "./popover.types";

export const PopoverContext = createContext<PopoverContextProps>(
  {} as PopoverContextProps
);

export function usePopoverProvider(props: UsePopoverProviderProps) {
  const {
    rounded = "md",
    shadow = "md",
    animation = "slideFade",
    side = "bottom",
    isOpen = false,
    children,
    ...rest
  } = props;

  const popoverContextProps = {
    ...rest,
    rounded,
    shadow,
    animation,
    side,
    isOpen,
  };
  return { children, ...popoverContextProps };
}

export function usePopover() {
  return useContext({
    context: PopoverContext,
    hookName: usePopover.name,
    providerName: PopoverContext.name,
  });
}
