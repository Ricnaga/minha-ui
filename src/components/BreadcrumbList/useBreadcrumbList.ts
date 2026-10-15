import { breadcrumb } from '@/theme';
import { useBreadcrumb } from '../Breadcrumb/useBreadcrumb';
import type { UseBreadcrumbListProps } from './breadcrumb-list.types';

export function useBreadcrumbList(props: UseBreadcrumbListProps) {
  const { className, ...rest } = props;
  const { size } = useBreadcrumb();

  const { list } = breadcrumb();

  return {
    listProps: {
      ...rest,
      className: list({ size, className }),
    },
  };
}
