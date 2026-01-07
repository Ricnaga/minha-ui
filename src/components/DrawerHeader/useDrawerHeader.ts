import type { HTMLAttributes } from "react";
import { drawerHeader } from "@/theme";
import { useDrawer } from "../Drawer/useDrawer";
import type {
  DrawerHeaderProps,
  UseDrawerHeaderProps,
} from "./drawer-header.types";

const { closeButton, wrapper } = drawerHeader();

export function useDrawerHeader(props: UseDrawerHeaderProps) {
  const {
    children,
    size = "md",
    align = "center",
    closeColor = "default",
    ...rest
  } = props;
  const { onClose, titleId } = useDrawer();

  const drawerHeaderProps: DrawerHeaderProps = {
    ...rest,
    id: titleId,
    className: wrapper({ size, align }),
  };

  const closeButtonProps: HTMLAttributes<HTMLButtonElement> = {
    className: closeButton({ size, closeColor }),
    onClick: onClose,
  };

  return { children, drawerHeaderProps, closeButtonProps };
}
