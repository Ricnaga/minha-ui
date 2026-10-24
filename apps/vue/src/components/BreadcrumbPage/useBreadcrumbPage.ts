import { computed } from 'vue';

import { breadcrumb } from '@/theme';

import type { UseBreadcrumbPageProps } from './breadcrumb-page.types';

export function useBreadcrumbPage(props: UseBreadcrumbPageProps) {
  const { page } = breadcrumb();

  const pageProps = computed(() => ({
    'aria-current': 'page' as const,
    class: page({ class: props.class }),
  }));

  return { pageProps };
}
