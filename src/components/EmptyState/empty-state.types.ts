import type { HTMLAttributes, ReactNode } from 'react';
import type { EmptyStateVariants } from '@/theme';

export interface UseEmptyStateProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'title'>, EmptyStateVariants {
  image?: ReactNode;
  title?: ReactNode;
  message?: ReactNode;
  action?: ReactNode;
}

export type EmptyStateProps = UseEmptyStateProps;
