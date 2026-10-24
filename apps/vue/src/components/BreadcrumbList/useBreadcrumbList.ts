import { computed } from 'vue';

import { breadcrumb } from '@/theme';

import { useBreadcrumb } from '../Breadcrumb/useBreadcrumb';
import type { UseBreadcrumbListProps } from './breadcrumb-list.types';

export function useBreadcrumbList(props: UseBreadcrumbListProps) {
  const { size } = useBreadcrumb();
  const { list } = breadcrumb();

  const listProps = computed(() => ({
    class: list({ size: size.value, class: props.class }),
  }));

  return { listProps };
}
