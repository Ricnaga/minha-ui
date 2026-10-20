import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { IconButtonVariants } from '@/theme';

export interface UseIconButtonProps
  extends
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color' | 'aria-label'>,
    IconButtonVariants {
  /** Nome acessível obrigatório — o botão contém apenas um ícone. */
  'aria-label': string;
  children: ReactNode;
}

export type IconButtonProps = UseIconButtonProps;
