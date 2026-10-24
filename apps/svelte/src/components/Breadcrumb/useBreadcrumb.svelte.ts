import { setContext } from 'svelte';

import { useContext } from '@/runes';
import { breadcrumb } from '@/theme';

import type {
  BreadcrumbContextProps,
  UseBreadcrumbProps,
} from './breadcrumb.types';

export const breadcrumbContext = Symbol('breadcrumb');

export function useBreadcrumbProvider(getProps: () => UseBreadcrumbProps) {
  const { nav } = breadcrumb();

  const context: BreadcrumbContextProps = {
    get size() {
      return getProps().size ?? 'md';
    },
    get separator() {
      return getProps().separator;
    },
  };

  setContext(breadcrumbContext, context);

  return {
    get breadcrumbProps() {
      const props = getProps();
      return {
        'aria-label': props['aria-label'] ?? 'Breadcrumb',
        class: nav({ size: context.size }),
      };
    },
  };
}

export function useBreadcrumb(): BreadcrumbContextProps {
  return useContext<BreadcrumbContextProps>({
    context: breadcrumbContext,
    hookName: useBreadcrumb.name,
    providerName: 'Breadcrumb',
  });
}
