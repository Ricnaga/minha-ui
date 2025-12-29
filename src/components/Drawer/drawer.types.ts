import type { useDrawerProvider } from "./useDrawer";
import type { RequiredChildren } from "@/types";
import type { DrawerContainerVariants } from "@/theme";

export type UseDrawerProviderProps = DrawerContainerVariants &
  RequiredChildren<{
    onClose: VoidFunction;
    titleId?: string;
  }>;

export type DrawerProps = UseDrawerProviderProps;

export type DrawerContextProps = Omit<
  ReturnType<typeof useDrawerProvider>,
  "children"
>;
