import { CaretRightIcon } from '@phosphor-icons/react';
import type { BreadcrumbSeparatorProps } from './breadcrumb-separator.types';
import { useBreadcrumbSeparator } from './useBreadcrumbSeparator';

export function BreadcrumbSeparator({
  children,
  className,
}: BreadcrumbSeparatorProps) {
  const { separatorProps, content } = useBreadcrumbSeparator({
    children,
    className,
  });

  return (
    <li {...separatorProps}>
      {content ?? <CaretRightIcon aria-hidden="true" />}
    </li>
  );
}
