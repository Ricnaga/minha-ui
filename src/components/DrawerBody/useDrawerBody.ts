import type { DrawerBodyProps, UseDrawerBodyProps } from "./drawer-body.types";
import { drawerBody } from "../../theme";

export function useDrawerBody(props: UseDrawerBodyProps) {
  const drawerBodyProps: DrawerBodyProps = {
    ...props,
    className: drawerBody(),
  };

  return { drawerBodyProps };
}
