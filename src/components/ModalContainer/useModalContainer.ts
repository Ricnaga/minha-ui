import { useClickAway } from '@/hooks';
import { modalContainer } from '@/theme';
import { useModal } from '../Modal/useModal';
import type {
  ModalContainerProps,
  UseModalContainerProps,
} from './modal-container.types';

export function useModalContainer(props: UseModalContainerProps) {
  const { radius = 'md', shadow = 'md', padding = 'md', ...rest } = props;
  const { onClose, isOpen, ariaLabel } = useModal();

  const modalContainerRef = useClickAway({
    onOutsideClick: onClose,
    enabled: true,
  });

  const modalContainerProps: ModalContainerProps = {
    ...rest,
    role: 'dialog',
    'aria-modal': 'true',
    'aria-label': ariaLabel,
    'data-testid': 'modal-container',
    className: modalContainer({ radius, shadow, isOpen, padding }),
  };

  return { modalContainerProps, modalContainerRef };
}
