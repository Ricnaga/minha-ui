import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

import type { CardTitleVariants } from '@/theme';

export type HeadingTag = 'h2' | 'h3' | 'h4';

export interface UseCardTitleProps
  extends
    Omit<
      HTMLAttributes<HTMLHeadingElement>,
      'class' | 'size' | 'weight' | 'color' | 'align'
    >,
    CardTitleVariants {
  class?: string;
  as?: HeadingTag;
}

export interface CardTitleProps extends UseCardTitleProps {
  children?: Snippet;
}
