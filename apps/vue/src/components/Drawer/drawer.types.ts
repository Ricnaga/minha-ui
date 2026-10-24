import type { DrawerContainerVariants } from '@/theme';

export interface UseDrawerProviderProps extends DrawerContainerVariants {
  children?: any;
  onClose: () => void;
  titleId?: string;
  ariaLabel?: string;
}

export type DrawerProps = UseDrawerProviderProps;

export interface DrawerContextProps {
  isOpen: boolean;
  side: 'right' | 'left' | 'bottom' | 'top';
  onClose: () => void;
  titleId?: string;
  ariaLabel?: string;
}
