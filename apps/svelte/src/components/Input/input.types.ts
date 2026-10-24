import type { Snippet } from 'svelte';
import type { HTMLInputAttributes } from 'svelte/elements';

import type { InputVariant } from '@/theme';

export interface UseInputProps {
  label?: string;
  startIcon?: Snippet;
  endIcon?: Snippet;
  class?: string;
  id?: string;
  variant?: InputVariant;
}

export type InputProps = UseInputProps &
  Omit<HTMLInputAttributes, 'class' | 'label'>;
