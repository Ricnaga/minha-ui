import { computed } from 'vue';

import { modalActions } from '@/theme';

import { useModal } from '../Modal/useModal';
import type { UseModalActionsProps } from './modal-actions.types';

export function useModalActions(props: UseModalActionsProps) {
  const { onClose } = useModal();
  const columns = computed(() => props.columns ?? 2);
  const align = computed(() => props.align ?? 'right');
  const modalActionsProps = computed(() => ({
    'data-testid': 'modal-actions',
    class: modalActions({ align: align.value, columns: columns.value, class: props.class as string | undefined } as Parameters<typeof modalActions>[0]),
  }));
  return { modalActionsProps, onClose };
}
