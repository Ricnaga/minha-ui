import { breadcrumb } from '@/theme';

import type { BreadcrumbContextProps } from '../Breadcrumb/breadcrumb.types';
import { useBreadcrumb } from '../Breadcrumb/useBreadcrumb.svelte';
import type { UseBreadcrumbSeparatorProps } from './breadcrumb-separator.types';

export function useBreadcrumbSeparator(
  getProps: () => UseBreadcrumbSeparatorProps,
) {
  const ctx = useBreadcrumb() as BreadcrumbContextProps;
  const { separator: separatorSlot } = breadcrumb();

  return {
    get content() {
      return getProps().children ?? ctx.separator;
    },
    get separatorProps() {
      const props = getProps();
      return {
        role: 'presentation',
        'aria-hidden': true,
        class: separatorSlot({ size: ctx.size, class: props.class }),
      };
    },
  };
}
