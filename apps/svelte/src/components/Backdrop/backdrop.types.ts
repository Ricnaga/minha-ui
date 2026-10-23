import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

import type { BackdropVariants } from '@/theme';

export interface UseBackdropProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'class'>, BackdropVariants {
  class?: string;
  zIndex?: number;
  onClose?: () => void;
  children?: Snippet;
}

export type BackdropProps = UseBackdropProps;
