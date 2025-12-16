import type { TabsPanelProps } from "./tabs-panel.types";
import { useTabsPanel } from "./useTabsPanel";

// Cada painel
export function TabsPanel(props: TabsPanelProps) {
  const { tabsPanelProps } = useTabsPanel(props);

  return <div {...tabsPanelProps} />;
}
