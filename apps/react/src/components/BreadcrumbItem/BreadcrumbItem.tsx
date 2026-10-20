import type { BreadcrumbItemProps } from './breadcrumb-item.types';
import { useBreadcrumbItem } from './useBreadcrumbItem';

export function BreadcrumbItem({ children, ...rest }: BreadcrumbItemProps) {
  const { itemProps } = useBreadcrumbItem(rest);

  return <li {...itemProps}>{children}</li>;
}
