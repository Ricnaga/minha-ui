import type { Snippet } from 'svelte';
import type { HTMLButtonAttributes } from 'svelte/elements';

import type { ButtonVariants } from '@/theme';

export interface UseButtonProps
  extends Omit<HTMLButtonAttributes, 'class' | 'color'>, ButtonVariants {
  class?: string;
  isLoading?: boolean;
}

export interface ButtonProps extends UseButtonProps {
  children?: Snippet;
}
