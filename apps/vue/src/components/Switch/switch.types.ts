import type { InputHTMLAttributes } from 'vue';

import type { SwitchVariants } from '@/theme';

export interface UseSwitchProps extends SwitchVariants {
  label?: string;
  onCheckedChange?: (checked: boolean) => void;
  class?: string;
  id?: string;
  disabled?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
}

export type SwitchProps = UseSwitchProps &
  /* @vue-ignore */ Omit<InputHTMLAttributes, 'class' | 'type' | 'size' | 'color'>;
