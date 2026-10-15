import type { ReactNode } from 'react';
import type { RequiredChildren } from '@/types';
import type { BreadcrumbVariants } from '@/theme';
import type { useBreadcrumbProvider } from './useBreadcrumb';

export type UseBreadcrumbProps = BreadcrumbVariants &
  RequiredChildren<{
    separator?: ReactNode;
    'aria-label'?: string;
  }>;

export type BreadcrumbProps = UseBreadcrumbProps;

export type BreadcrumbContextProps = Omit<
  ReturnType<typeof useBreadcrumbProvider>,
  'children' | 'breadcrumbProps'
>;
