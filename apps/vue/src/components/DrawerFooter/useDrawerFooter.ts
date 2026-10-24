import { computed } from 'vue';

import { drawerFooter } from '@/theme';

import type { UseDrawerFooterProps } from './drawer-footer.types';

export function useDrawerFooter(props: UseDrawerFooterProps) {
  const align = computed(() => props.align ?? 'end');
  const padding = computed(() => props.padding ?? 'md');
  const border = computed(() => props.border ?? 'none');
  const drawerFooterProps = computed(() => ({
    ...props,
    class: drawerFooter({ align: align.value, border: border.value, padding: padding.value, class: props.class } as Parameters<typeof drawerFooter>[0]),
  }));
  return { drawerFooterProps };
}
