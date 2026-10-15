import type { HTMLAttributes, ReactNode } from 'react';
import type { ErrorStateVariants } from '@/theme';

export interface UseErrorStateProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'title'>, ErrorStateVariants {
  image?: ReactNode;
  title?: ReactNode;
  message?: ReactNode;
  action?: ReactNode;
}

export type ErrorStateProps = UseErrorStateProps;
