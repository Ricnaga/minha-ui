import { computed } from 'vue';

import { breadcrumb } from '@/theme';

import type { UseBreadcrumbItemProps } from './breadcrumb-item.types';

export function useBreadcrumbItem(props: UseBreadcrumbItemProps) {
  const { item } = breadcrumb();

  const itemProps = computed(() => ({ class: item({ class: props.class }) }));

  return { itemProps };
}
