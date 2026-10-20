import type {
  ModalContentProps,
  UseModalContentProps,
} from './modal-content.types';
import { modalContent } from '@/theme';

export function useModalContent(props: UseModalContentProps) {
  const modalContentProps: ModalContentProps = {
    ...props,
    className: modalContent(),
  };

  return { modalContentProps };
}
