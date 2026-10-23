import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

import type { CardBodyVariants } from '@/theme';

export interface UseCardBodyProps
  extends
    Omit<
      HTMLAttributes<HTMLDivElement>,
      'class' | 'padding' | 'gap' | 'background'
    >,
    CardBodyVariants {
  class?: string;
}

export interface CardBodyProps extends UseCardBodyProps {
  children?: Snippet;
}
