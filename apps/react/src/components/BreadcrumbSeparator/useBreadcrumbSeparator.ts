import { breadcrumb } from '@/theme';
import { useBreadcrumb } from '../Breadcrumb/useBreadcrumb';
import type { UseBreadcrumbSeparatorProps } from './breadcrumb-separator.types';

export function useBreadcrumbSeparator(props: UseBreadcrumbSeparatorProps) {
  const { children, className } = props;
  const { separator, size } = useBreadcrumb();

  const { separator: separatorSlot } = breadcrumb();

  return {
    content: children ?? separator,
    separatorProps: {
      role: 'presentation',
      'aria-hidden': true,
      className: separatorSlot({ size, className }),
    },
  };
}
