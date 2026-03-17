import { createContext, useState, type ProviderProps } from "react";
import { useContext } from "@/hooks";
import type {
  TabsContextProps,
  UseTabsContextProps
} from "./tabs.types";

export const TabsContext = createContext<TabsContextProps>(
  {} as TabsContextProps
);

export function useTabsProvider(props: UseTabsContextProps) {
  const { children, variant = "default", value, onTabChange } = props;

  const [prevValue, setPrevValue] = useState(value);

  const handleTabChange = (newValue: string) => {
    setPrevValue(value);
    onTabChange(newValue);
  };

  const contextProps: ProviderProps<TabsContextProps> = {
    children,
    value: {
      value,
      prevValue,
      onTabChange: handleTabChange,
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
