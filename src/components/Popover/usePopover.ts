import { createContext } from 'react';
import { useContext } from '@/hooks';
import type {
  PopoverContextProps,
  UsePopoverProviderProps,
} from './popover.types';

export const PopoverContext = createContext<PopoverContextProps>(
  {} as PopoverContextProps,
);

export function usePopoverProvider(props: UsePopoverProviderProps) {
  const {
    side = 'bottom',
    width = 'auto',
    padding = 'md',
    shadow = 'md',
    radius = 'md',
    animation = 'slideFade',
    isOpen = false,
    children,
    ...rest
  } = props;

  const popoverContextProps = {
    ...rest,
    radius,
    shadow,
    animation,
    side,
    isOpen,
    width,
    padding,
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
