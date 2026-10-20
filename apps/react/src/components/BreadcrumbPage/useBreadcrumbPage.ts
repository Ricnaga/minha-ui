import { breadcrumb } from '@/theme';
import type { UseBreadcrumbPageProps } from './breadcrumb-page.types';

export function useBreadcrumbPage(props: UseBreadcrumbPageProps) {
  const { className, ...rest } = props;

  const { page } = breadcrumb();

  return {
    pageProps: {
      'aria-current': 'page' as const,
      ...rest,
      className: page({ className }),
    },
  };
}
