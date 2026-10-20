import { createContext, useId, useState, type ProviderProps } from 'react';
import { useContext } from '@/hooks';
import type {
  TabsContextProps,
  TabsIds,
  UseTabsContextProps,
} from './tabs.types';

export const TabsContext = createContext<TabsContextProps>(
  {} as TabsContextProps,
);

export function getTabsIds(baseId: string, value: string): TabsIds {
  return {
    tabId: `${baseId}-tab-${value}`,
    panelId: `${baseId}-panel-${value}`,
  };
}

export function useTabsProvider(props: UseTabsContextProps) {
  const { children, variant = 'default', value, onTabChange } = props;
  const baseId = useId();

  const [prevValue, setPrevValue] = useState<string>(value);

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
      baseId,
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
