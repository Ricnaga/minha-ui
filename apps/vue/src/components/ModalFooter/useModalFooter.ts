import { computed } from 'vue';

import { modalFooter } from '@/theme';

import type { UseModalFooterProps } from './modal-footer.types';

export function useModalFooter(props: UseModalFooterProps) {
  const padding = computed(() => props.padding ?? 'md');
  const align = computed(() => props.align ?? 'right');
  const modalFooterProps = computed(() => ({
    ...props,
    class: modalFooter({ align: align.value, padding: padding.value }),
  }));
  return { modalFooterProps };
}
