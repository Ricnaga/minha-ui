import { breadcrumb } from '@/theme';

import type { UseBreadcrumbItemProps } from './breadcrumb-item.types';

export function useBreadcrumbItem(getProps: () => UseBreadcrumbItemProps) {
  const { item } = breadcrumb();

  return {
    get itemProps() {
      const props = getProps();
      return { class: item({ class: props.class }) };
    },
  };
}
