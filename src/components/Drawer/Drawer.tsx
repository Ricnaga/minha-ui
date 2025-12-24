import { DrawerContainer } from "../DrawerContainer";
import type { DrawerProps } from "./drawer.types";
import { DrawerContext, useDrawerProvider } from "./useDrawer";

export function Drawer(props: DrawerProps) {
  const { children, ...rest } = useDrawerProvider(props);

  return (
    <DrawerContext.Provider value={rest}>
      <DrawerContainer>{children}</DrawerContainer>
    </DrawerContext.Provider>
  );
}
