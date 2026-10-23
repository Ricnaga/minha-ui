import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

import type { ErrorStateVariants } from '@/theme';

export interface UseErrorStateProps
  extends
    Omit<HTMLAttributes<HTMLDivElement>, 'class' | 'title'>,
    ErrorStateVariants {
  class?: string;
  image?: Snippet;
  title?: Snippet | string;
  message?: Snippet | string;
  action?: Snippet;
}

export type ErrorStateProps = UseErrorStateProps;
