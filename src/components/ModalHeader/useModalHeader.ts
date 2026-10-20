import type { ButtonHTMLAttributes } from 'react';
import { modalHeader } from '@/theme';
import { useModal } from '../Modal';
import type {
  ModalHeaderProps,
  UseModalHeaderProps,
} from './modal-header.types';

const { closeButton, wrapper } = modalHeader();

export function useModalHeader(props: UseModalHeaderProps) {
  const { children, padding = 'lg', align = 'left', ...rest } = props;
  const { onClose } = useModal();

  const modalHeaderProps: ModalHeaderProps = {
    ...rest,
    className: wrapper({ align, padding }),
  };

  const closeButtonProps: ButtonHTMLAttributes<HTMLButtonElement> = {
    type: 'button',
    'aria-label': 'Fechar',
    className: closeButton(),
    onClick: onClose,
  };

  return { children, modalHeaderProps, closeButtonProps };
}
