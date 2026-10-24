import { computed } from 'vue';

import { modalContent } from '@/theme';

import type { UseModalContentProps } from './modal-content.types';

export function useModalContent(props: UseModalContentProps) {
  const modalContentProps = computed(() => ({
    ...props,
    class: modalContent({ class: props.class as string | undefined } as Parameters<typeof modalContent>[0]),
  }));

  return { modalContentProps };
}
