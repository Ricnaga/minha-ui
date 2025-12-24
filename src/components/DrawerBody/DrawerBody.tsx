import type { DrawerBodyProps } from "./drawer-body.types";
import { useDrawerBody } from "./useDrawerBody";

export function DrawerBody(props: DrawerBodyProps) {
  const { drawerBodyProps } = useDrawerBody(props);

  return <section {...drawerBodyProps} />;
}
