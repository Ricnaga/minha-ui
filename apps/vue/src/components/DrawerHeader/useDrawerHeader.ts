import { computed } from 'vue';

import { drawerHeader } from '@/theme';

import { useDrawer } from '../Drawer/useDrawer';
import type { UseDrawerHeaderProps } from './drawer-header.types';

const { closeButton, wrapper } = drawerHeader();

export function useDrawerHeader(props: UseDrawerHeaderProps) {
  const { onClose, titleId } = useDrawer();
  const size = computed(() => props.size ?? 'md');
  const align = computed(() => props.align ?? 'center');
  const closeColor = computed(() => props.closeColor ?? 'default');

  const drawerHeaderProps = computed(() => ({
    ...props,
    id: titleId,
    class: wrapper({ size: size.value, align: align.value }),
  }));

  const closeButtonProps = computed(() => ({
    type: 'button',
    'aria-label': 'Fechar',
    class: closeButton({ size: size.value, closeColor: closeColor.value }),
    onClick: onClose,
  }));

  return { drawerHeaderProps, closeButtonProps };
}
