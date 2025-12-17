import { createContext, type ProviderProps } from "react";
import { useContext } from "../../hooks";
import type {
  TabsContextProps,
  UseTabsContextProps
} from "./tabs.types";

export const TabsContext = createContext<TabsContextProps>(
  {} as TabsContextProps
);

export function useTabsProvider(props: UseTabsContextProps) {
  const { children, variant = "default", ...rest } = props;

  const contextProps: ProviderProps<TabsContextProps> = {
    children,
    value: {
      ...rest,
      variant,
    },
  };
  return { contextProps };
}

export function useTabs() {
  return useContext({
    context: TabsContext,
    hookName: useTabs.name,
    providerName: TabsContext.name,
  });
}
