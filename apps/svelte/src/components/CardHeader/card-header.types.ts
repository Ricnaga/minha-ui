import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

import type { CardHeaderVariants } from '@/theme';

export interface UseCardHeaderProps
  extends
    Omit<
      HTMLAttributes<HTMLElement>,
      'class' | 'align' | 'divider' | 'background'
    >,
    CardHeaderVariants {
  class?: string;
}

export interface CardHeaderProps extends UseCardHeaderProps {
  children?: Snippet;
}
