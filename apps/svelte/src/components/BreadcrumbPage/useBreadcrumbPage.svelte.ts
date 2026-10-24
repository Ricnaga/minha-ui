import { breadcrumb } from '@/theme';

import type { UseBreadcrumbPageProps } from './breadcrumb-page.types';

export function useBreadcrumbPage(getProps: () => UseBreadcrumbPageProps) {
  const { page } = breadcrumb();

  return {
    get pageProps() {
      const props = getProps();
      return {
        'aria-current': 'page' as const,
        class: page({ class: props.class }),
      };
    },
  };
}
