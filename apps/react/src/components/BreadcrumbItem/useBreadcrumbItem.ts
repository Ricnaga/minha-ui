import { breadcrumb } from '@/theme';
import type { UseBreadcrumbItemProps } from './breadcrumb-item.types';

export function useBreadcrumbItem(props: UseBreadcrumbItemProps) {
  const { className, ...rest } = props;

  const { item } = breadcrumb();

  return {
    itemProps: {
      ...rest,
      className: item({ className }),
    },
  };
}
