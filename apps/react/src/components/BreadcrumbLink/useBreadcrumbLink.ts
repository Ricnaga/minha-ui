import { breadcrumb } from '@/theme';
import type { UseBreadcrumbLinkProps } from './breadcrumb-link.types';

export function useBreadcrumbLink(props: UseBreadcrumbLinkProps) {
  const { className, ...rest } = props;

  const { link } = breadcrumb();

  return {
    linkProps: {
      ...rest,
      className: link({ className }),
    },
  };
}
