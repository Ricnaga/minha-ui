import type { DrawerFooterProps } from "./drawer-footer.types";
import { useDrawerFooter } from "./useDrawerFooter";

export function DrawerFooter(props: DrawerFooterProps) {
  const { drawerFooterProps } = useDrawerFooter(props);

  return <footer {...drawerFooterProps} />;
}
