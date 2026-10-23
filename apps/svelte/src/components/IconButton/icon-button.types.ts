import type { Snippet } from 'svelte';
import type { HTMLButtonAttributes } from 'svelte/elements';

import type { IconButtonVariants } from '@/theme';

export interface UseIconButtonProps
  extends Omit<HTMLButtonAttributes, 'class' | 'color'>, IconButtonVariants {
  class?: string;
  isLoading?: boolean;
  children?: Snippet;
}

export type IconButtonProps = UseIconButtonProps;
