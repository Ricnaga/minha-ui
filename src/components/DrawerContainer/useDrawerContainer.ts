import type {
  DrawerContainerProps,
  UseDrawerContainerProps,
} from "./drawer-container.types";
import { drawerContainer } from "../../theme";
import { useDrawer } from "../Drawer/useDrawer";

export function useDrawerContainer(props: UseDrawerContainerProps) {
  const { isOpen, onClose, side } = useDrawer();

  const drawerContainerProps: DrawerContainerProps = {
    ...props,
    className: drawerContainer({ isOpen, side }),
  };

  return { drawerContainerProps, isOpen, onClose };
}
