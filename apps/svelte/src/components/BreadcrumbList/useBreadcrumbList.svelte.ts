import { breadcrumb } from '@/theme';

import type { BreadcrumbContextProps } from '../Breadcrumb/breadcrumb.types';
import { useBreadcrumb } from '../Breadcrumb/useBreadcrumb.svelte';
import type { UseBreadcrumbListProps } from './breadcrumb-list.types';

export function useBreadcrumbList(getProps: () => UseBreadcrumbListProps) {
  const ctx = useBreadcrumb() as BreadcrumbContextProps;
  const { list } = breadcrumb();

  return {
    get listProps() {
      const props = getProps();
      return { class: list({ size: ctx.size, class: props.class }) };
    },
  };
}
