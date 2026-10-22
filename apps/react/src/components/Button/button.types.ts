import type { ButtonVariants } from '@/theme';
import type { ButtonHTMLAttributes } from 'react';

export interface UseButtonProps
  extends
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    ButtonVariants {
  isLoading?: boolean;
}

export type ButtonProps = UseButtonProps;
