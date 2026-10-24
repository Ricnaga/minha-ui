import { computed } from 'vue';

import { drawerContainer } from '@/theme';

import { useDrawer } from '../Drawer/useDrawer';
import type { UseDrawerContainerProps } from './drawer-container.types';

export function useDrawerContainer(props: UseDrawerContainerProps) {
  const { isOpen, onClose, side, ariaLabel } = useDrawer();

  const drawerContainerProps = computed(() => ({
    ...props,
    role: 'dialog',
    'aria-modal': 'true',
    'aria-label': ariaLabel,
    class: drawerContainer({ isOpen, side, class: props.class } as Parameters<typeof drawerContainer>[0]),
  }));

  return { drawerContainerProps, isOpen, onClose };
}
