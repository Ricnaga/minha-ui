import { computed } from 'vue';

import { breadcrumb } from '@/theme';

import { useBreadcrumb } from '../Breadcrumb/useBreadcrumb';
import type { UseBreadcrumbSeparatorProps } from './breadcrumb-separator.types';

export function useBreadcrumbSeparator(props: UseBreadcrumbSeparatorProps) {
  const { separator, size } = useBreadcrumb();
  const { separator: separatorSlot } = breadcrumb();

  const separatorProps = computed(() => ({
    role: 'presentation',
    'aria-hidden': true,
    class: separatorSlot({ size: size.value, class: props.class }),
  }));

  return { separatorProps, content: separator };
}
