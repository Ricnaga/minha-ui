import { Backdrop } from '../Backdrop';
import type { DrawerContainerProps } from './drawer-container.types';
import { useDrawerContainer } from './useDrawerContainer';

export function DrawerContainer(props: DrawerContainerProps) {
  const { drawerContainerProps, isOpen, onClose } = useDrawerContainer(props);

  return (
    <Backdrop isOpen={isOpen} onClose={onClose}>
      <div {...drawerContainerProps} />
    </Backdrop>
  );
}
