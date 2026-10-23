import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

import type { CardSubtitleVariants } from '@/theme';

export interface UseCardSubtitleProps
  extends
    Omit<
      HTMLAttributes<HTMLParagraphElement>,
      'class' | 'size' | 'weight' | 'color' | 'align'
    >,
    CardSubtitleVariants {
  class?: string;
}

export interface CardSubtitleProps extends UseCardSubtitleProps {
  children?: Snippet;
}
