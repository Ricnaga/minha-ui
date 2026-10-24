import type { ModalContainerVariants } from '@/theme';

export interface UseModalProviderProps extends ModalContainerVariants {
  children?: any;
  isOpen: boolean;
  onClose: () => void;
  titleId?: string;
  ariaLabel?: string;
}

export type ModalProps = UseModalProviderProps;

export interface ModalContextProps {
  isOpen: boolean;
  onClose: () => void;
  titleId?: string;
  ariaLabel?: string;
}
