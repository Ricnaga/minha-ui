import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

import type { CardFooterVariants } from '@/theme';

export interface UseCardFooterProps
  extends
    Omit<
      HTMLAttributes<HTMLDivElement>,
      'class' | 'align' | 'wrap' | 'divider'
    >,
    CardFooterVariants {
  class?: string;
}

export interface CardFooterProps extends UseCardFooterProps {
  children?: Snippet;
}
