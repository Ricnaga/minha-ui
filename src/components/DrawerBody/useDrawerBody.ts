import type { DrawerBodyProps, UseDrawerBodyProps } from "./drawer-body.types";
import { drawerBody } from "@/theme";

export function useDrawerBody(props: UseDrawerBodyProps) {
  const {
    padding = "md",
    scroll = "auto",
    background = "default",
    ...rest
  } = props;

  const drawerBodyProps: DrawerBodyProps = {
    ...rest,
    className: drawerBody({ background, padding, scroll }),
  };

  return { drawerBodyProps };
}
