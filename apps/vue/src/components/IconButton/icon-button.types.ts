import type { ButtonHTMLAttributes } from 'vue';

import type { IconButtonVariants } from '@/theme';

export interface UseIconButtonProps extends IconButtonVariants {
  class?: string;
  isLoading?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: MouseEvent) => void;
}

export type IconButtonProps = UseIconButtonProps &
  /* @vue-ignore */ Omit<
    ButtonHTMLAttributes,
    'class' | 'color' | 'disabled' | 'type'
  >;
