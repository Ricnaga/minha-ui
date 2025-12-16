import type { TabsPanelsProps } from "./tabs-panels.types";
import { useTabsPanels } from "./useTabsPanels";

// Container de panels
export function TabsPanels(props: TabsPanelsProps) {
  const { tabsPanelsProps } = useTabsPanels(props);
  return <div {...tabsPanelsProps} />;
}
