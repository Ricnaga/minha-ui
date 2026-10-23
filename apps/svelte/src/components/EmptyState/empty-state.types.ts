import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

import type { EmptyStateVariants } from '@/theme';

export interface UseEmptyStateProps
  extends
    Omit<HTMLAttributes<HTMLDivElement>, 'class' | 'title'>,
    EmptyStateVariants {
  class?: string;
  image?: Snippet;
  title?: Snippet | string;
  message?: Snippet | string;
  action?: Snippet;
}

export type EmptyStateProps = UseEmptyStateProps;
