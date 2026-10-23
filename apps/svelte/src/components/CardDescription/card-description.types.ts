import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

import type { CardDescriptionVariants } from '@/theme';

export interface UseCardDescriptionProps
  extends
    Omit<
      HTMLAttributes<HTMLParagraphElement>,
      'class' | 'size' | 'weight' | 'color' | 'align'
    >,
    CardDescriptionVariants {
  class?: string;
}

export interface CardDescriptionProps extends UseCardDescriptionProps {
  children?: Snippet;
}
