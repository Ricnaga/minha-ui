import type { ActivityProps, HTMLAttributes } from 'react';
import { backdrop } from '@/theme';
import type { BackdropProps, UseBackdropProps } from './backdrop.types';
import type { SpinnerProps } from '../Spinner';

const { base, wrapper } = backdrop();

export function useBackdrop(props: UseBackdropProps) {
  const {
    isOpen = false,
    blur = 'md',
    zIndex = 1000,
    isLoading = false,
    children,
    ...rest
  } = props;

  // Overlay fechado: escondido de AT e sem elementos focáveis (`inert`).
  // Overlay aberto: precisa permanecer interativo — o conteúdo (diálogo)
  // vive dentro do backdrop, então `inert` fixo tornaria o botão de fechar
  // e o conteúdo inalcançáveis.
  const backdropProps: BackdropProps = {
    ...rest,
    role: 'presentation',
    'aria-hidden': !isOpen,
    inert: !isOpen,
    className: base({ isOpen, blur }),
    style: { zIndex },
  };

  const wrapperProps: HTMLAttributes<HTMLDivElement> = {
    onClick: (e) => e.stopPropagation(),
    className: wrapper({ isLoading }),
  };

  const spinnerProps: SpinnerProps = {
    color: 'primary',
    thickness: 'lg',
    className: 'size-20',
  };

  const mode: ActivityProps['mode'] = isLoading ? 'visible' : 'hidden';

  return { children, backdropProps, mode, wrapperProps, spinnerProps };
}
