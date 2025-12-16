import type { TabsProps } from "./tabs.types";
import { TabsContext, useTabsProvider } from "./useTabs";

export function Tabs(props: TabsProps) {
  const { contextProps } = useTabsProvider(props);
  return <TabsContext.Provider {...contextProps} />;
}
