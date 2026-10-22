import type { ButtonVariants } from '@/theme';

export type UseButtonProps = ButtonVariants & {
  isLoading?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
};

export type ButtonProps = UseButtonProps;
