import type { Component, HTMLAttributes } from 'vue';

import type { EmptyStateVariants } from '@/theme';

export interface UseEmptyStateProps extends /* @vue-ignore */ EmptyStateVariants {
  class?: string;
  image?: Component | null;
  title?: Component | string | null;
  message?: Component | string | null;
  action?: Component | null;
}

export type EmptyStateProps = UseEmptyStateProps &
  /* @vue-ignore */ Omit<HTMLAttributes, 'class' | 'title'>;
