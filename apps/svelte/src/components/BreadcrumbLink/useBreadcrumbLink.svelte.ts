import { breadcrumb } from '@/theme';

import type { UseBreadcrumbLinkProps } from './breadcrumb-link.types';

export function useBreadcrumbLink(getProps: () => UseBreadcrumbLinkProps) {
  const { link } = breadcrumb();

  return {
    get linkProps() {
      const props = getProps();
      return { class: link({ class: props.class }) };
    },
  };
}
