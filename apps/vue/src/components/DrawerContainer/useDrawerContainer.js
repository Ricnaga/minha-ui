import { computed } from 'vue';
import { drawerContainer } from '@/theme';
import { useDrawer } from '../Drawer/useDrawer';
export function useDrawerContainer(props) {
    const { isOpen, onClose, side, ariaLabel } = useDrawer();
    const drawerContainerProps = computed(() => ({
        ...props,
        role: 'dialog',
        'aria-modal': 'true',
        'aria-label': ariaLabel,
        class: drawerContainer({ isOpen, side, class: props.class }),
    }));
    return { drawerContainerProps, isOpen, onClose };
}
