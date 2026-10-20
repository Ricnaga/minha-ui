import type { BreadcrumbLinkProps } from './breadcrumb-link.types';
import { useBreadcrumbLink } from './useBreadcrumbLink';

export function BreadcrumbLink({ children, ...rest }: BreadcrumbLinkProps) {
  const { linkProps } = useBreadcrumbLink(rest);

  return <a {...linkProps}>{children}</a>;
}
