import { XIcon } from "@phosphor-icons/react";
import type { DrawerHeaderProps } from "./drawer-header.types";
import { useDrawerHeader } from "./useDrawerHeader";

export function DrawerHeader(props: DrawerHeaderProps) {
  const { children, drawerHeaderProps, closeButtonProps } =
    useDrawerHeader(props);

  return (
    <header {...drawerHeaderProps}>
      {children}
      <button {...closeButtonProps}>
        <XIcon />
      </button>
    </header>
  );
}
