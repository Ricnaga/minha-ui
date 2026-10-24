import type { InputHTMLAttributes } from 'vue';

import type { InputVariants } from '@/theme';

export interface UseInputProps extends InputVariants {
  label?: string;
  startIcon?: unknown;
  endIcon?: unknown;
  class?: string;
  id?: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
}

export type InputProps = UseInputProps &
  /* @vue-ignore */ Omit<InputHTMLAttributes, 'class' | 'label'>;
