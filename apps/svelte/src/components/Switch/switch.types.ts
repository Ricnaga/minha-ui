import type { HTMLInputAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

import type { SwitchVariants } from '@/theme';

export interface UseSwitchProps extends SwitchVariants {
  label?: string | Snippet;
  onCheckedChange?: (checked: boolean) => void;
  class?: string;
  id?: string;
  disabled?: boolean;
}

export type SwitchProps = UseSwitchProps &
  Omit<HTMLInputAttributes, 'class' | 'type' | 'size' | 'color'>;
