import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

import type { ChipVariants } from '@/theme';

export interface UseChipProps
  extends
    Omit<HTMLAttributes<HTMLSpanElement>, 'class' | 'color'>,
    ChipVariants {
  class?: string;
  children?: Snippet;
  onRemove?: () => void;
}

export type ChipProps = UseChipProps;
