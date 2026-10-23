import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

import type { CardActionsVariants } from '@/theme';

export interface UseCardActionsProps
  extends
    Omit<
      HTMLAttributes<HTMLElement>,
      'class' | 'align' | 'direction' | 'wrap' | 'divider'
    >,
    CardActionsVariants {
  class?: string;
}

export interface CardActionsProps extends UseCardActionsProps {
  children?: Snippet;
}
