import type { Snippet } from 'svelte';

import type { ButtonVariants } from '@/theme';

export type UseButtonProps = ButtonVariants & {
  isLoading?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  class?: string;
  onclick?: (event: MouseEvent) => void;
};

export type ButtonProps = UseButtonProps & {
  children?: Snippet;
};
