import type { TabsPanelProps } from "./tabs-panel.types";
import { useTabsPanel } from "./useTabsPanel";
import { useTabs } from "../Tabs/useTabs";

export function TabsPanel(props: TabsPanelProps) {
  const { tabsPanelProps } = useTabsPanel(props);
  const { value: active } = useTabs();

  return (
    <div
      key={active}
      {...tabsPanelProps}
      className={`${tabsPanelProps.className} animate-in fade-in slide-in-from-right-4 duration-300`}
    />
  );
}
