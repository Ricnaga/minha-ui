import type { BreadcrumbListProps } from './breadcrumb-list.types';
import { useBreadcrumbList } from './useBreadcrumbList';

export function BreadcrumbList({ children, ...rest }: BreadcrumbListProps) {
  const { listProps } = useBreadcrumbList(rest);

  return <ol {...listProps}>{children}</ol>;
}
