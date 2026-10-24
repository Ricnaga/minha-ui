import { inject, provide, ref, useId } from 'vue';

import type { TabsContextProps, TabsIds, UseTabsContextProps } from './tabs.types';

export const TabsContextKey = Symbol('TabsContext');

export function getTabsIds(baseId: string, value: string): TabsIds {
  return {
    tabId: `${baseId}-tab-${value}`,
    panelId: `${baseId}-panel-${value}`,
  };
}

export function useTabsProvider(props: UseTabsContextProps) {
  const variant = props.variant ?? 'default';
  const baseId = useId();
  const prevValue = ref<string>(props.value);

  function handleTabChange(newValue: string) {
    prevValue.value = props.value;
    props.onTabChange(newValue);
  }

  const context: TabsContextProps = {
    value: props.value,
    prevValue: prevValue.value,
    onTabChange: handleTabChange,
    variant,
    baseId,
  };

  provide(TabsContextKey, context);

  return context;
}

export function useTabs(): TabsContextProps {
  const context = inject<TabsContextProps>(TabsContextKey);
  if (!context) {
    throw new Error('useTabs must be used within a TabsProvider');
  }
  return context;
}
