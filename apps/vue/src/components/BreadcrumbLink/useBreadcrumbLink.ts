import { computed } from 'vue';

import { breadcrumb } from '@/theme';

import type { UseBreadcrumbLinkProps } from './breadcrumb-link.types';

export function useBreadcrumbLink(props: UseBreadcrumbLinkProps) {
  const { link } = breadcrumb();

  const linkProps = computed(() => ({ class: link({ class: props.class }) }));

  return { linkProps };
}
