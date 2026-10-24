import type { PopoverContentVariants } from '@/theme';

export interface UsePopoverProviderProps extends PopoverContentVariants {
  children?: any;
  isOpen: boolean;
  onPopoverChange: () => void;
}

export type PopoverProps = UsePopoverProviderProps;

export interface PopoverContextProps extends PopoverContentVariants {
  isOpen: boolean;
  onPopoverChange: () => void;
}
