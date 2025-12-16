import type { TabsTriggerProps } from "./tabs-trigger.types";
import { useTabsTrigger } from "./useTabsTrigger";

export function TabsTrigger(props: TabsTriggerProps) {
  const { tabsTriggerProps } = useTabsTrigger(props);

  return <button {...tabsTriggerProps} />;
}
