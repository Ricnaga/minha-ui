import { createContext } from "react";
import { useContext } from "../../hooks";
import type {
  DrawerContextProps,
  UseDrawerProviderProps,
} from "./drawer.types";

export const DrawerContext = createContext<DrawerContextProps>(
  {} as DrawerContextProps
);

export function useDrawerProvider(props: UseDrawerProviderProps) {
  const { children, isOpen = false, side = "right", ...rest } = props;

  return { children, isOpen, side, ...rest };
}

export function useDrawer() {
  return useContext({
    context: DrawerContext,
    hookName: useDrawer.name,
    providerName: DrawerContext.name,
  });
}
