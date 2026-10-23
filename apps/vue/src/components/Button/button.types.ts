import type { ButtonHTMLAttributes } from 'vue';

import type { ButtonVariants } from '@/theme';

export interface UseButtonProps extends ButtonVariants {
  class?: string;
  isLoading?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

/**
 * O `@vue-ignore` impede o compilador do SFC de converter os atributos nativos
 * em props de runtime: eles continuam tipados e caem em `$attrs` (fallthrough).
 */
export type ButtonProps = UseButtonProps &
  /* @vue-ignore */ Omit<ButtonHTMLAttributes, 'class' | 'color' | 'disabled'>;
