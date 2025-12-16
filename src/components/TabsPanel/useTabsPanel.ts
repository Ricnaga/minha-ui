import { useTabs } from "../Tabs/useTabs";
import {
  type TabsPanelProps,
  type UseTabsPanelProps,
} from "./tabs-panel.types";

export function useTabsPanel(props: UseTabsPanelProps) {
  const { value: tabsValue, ...rest } = props;

  const { value: active } = useTabs();
  const isActive = active === tabsValue;

  const tabsPanelProps: Omit<TabsPanelProps, "value"> = {
    ...rest,
    role: "tabspanel",
    style: { display: isActive ? "block" : "none" },
  };

  return { tabsPanelProps };
}
