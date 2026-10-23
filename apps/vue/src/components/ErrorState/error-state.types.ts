import type { Component, HTMLAttributes } from 'vue';

import type { ErrorStateVariants } from '@/theme';

export interface UseErrorStateProps extends /* @vue-ignore */ ErrorStateVariants {
  class?: string;
  image?: Component | null;
  title?: Component | string | null;
  message?: Component | string | null;
  action?: Component | null;
}

export type ErrorStateProps = UseErrorStateProps &
  /* @vue-ignore */ Omit<HTMLAttributes, 'class' | 'title'>;
