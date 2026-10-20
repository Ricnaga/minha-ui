import type { BreadcrumbPageProps } from './breadcrumb-page.types';
import { useBreadcrumbPage } from './useBreadcrumbPage';

export function BreadcrumbPage({ children, ...rest }: BreadcrumbPageProps) {
  const { pageProps } = useBreadcrumbPage(rest);

  return <span {...pageProps}>{children}</span>;
}
