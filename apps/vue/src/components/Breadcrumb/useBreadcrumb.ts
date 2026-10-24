import { computed, provide, type InjectionKey } from 'vue';

import { useContext } from '@/composables';
import { breadcrumb } from '@/theme';

import type {
  BreadcrumbContextProps,
  UseBreadcrumbProps,
} from './breadcrumb.types';

export const breadcrumbContext: InjectionKey<BreadcrumbContextProps> =
  Symbol('breadcrumb');

export function useBreadcrumbProvider(props: UseBreadcrumbProps) {
  const { nav } = breadcrumb();

  const context: BreadcrumbContextProps = {
    size: computed(() => props.size ?? 'md'),
    separator: computed(() => props.separator),
  };

  provide(breadcrumbContext, context);

  const p = props as Record<string, unknown>;
  const breadcrumbProps = computed(() => ({
    'aria-label':
      (p['aria-label'] as string) ?? (p.ariaLabel as string) ?? 'Breadcrumb',
    class: nav({ size: context.size.value }),
  }));

  return { breadcrumbProps, context };
}

export function useBreadcrumb() {
  return useContext({
    context: breadcrumbContext,
    hookName: useBreadcrumb.name,
    providerName: 'Breadcrumb',
  });
}
