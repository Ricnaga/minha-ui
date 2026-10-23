import type { AriaRole, HTMLAttributes } from 'svelte/elements';

import type { ScrollAreaVariants } from '@/theme';

export interface UseScrollAreaProps
  extends
    Omit<HTMLAttributes<HTMLDivElement>, 'class' | 'role' | 'tabindex'>,
    ScrollAreaVariants {
  class?: string;
  role?: AriaRole;
  tabindex?: number;
}

export type ScrollAreaProps = UseScrollAreaProps;
