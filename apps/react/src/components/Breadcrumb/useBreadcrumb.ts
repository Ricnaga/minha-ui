import { createContext } from 'react';
import { useContext } from '@/hooks';
import { breadcrumb } from '@/theme';
import type {
  BreadcrumbContextProps,
  UseBreadcrumbProps,
} from './breadcrumb.types';

export const BreadcrumbContext = createContext<BreadcrumbContextProps>(
  {} as BreadcrumbContextProps,
);

export function useBreadcrumbProvider(props: UseBreadcrumbProps) {
  const {
    children,
    separator,
    size = 'md',
    'aria-label': ariaLabel = 'Breadcrumb',
  } = props;

  const { nav } = breadcrumb();

  return {
    children,
    breadcrumbProps: {
      'aria-label': ariaLabel,
      className: nav({ size }),
    },
    separator,
    size,
  };
}

export function useBreadcrumb() {
  return useContext({
    context: BreadcrumbContext,
    hookName: useBreadcrumb.name,
    providerName: BreadcrumbContext.name,
  });
}
