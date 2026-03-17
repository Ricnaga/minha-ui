import { tabs } from "@/theme";
import { useTabs } from "../Tabs/useTabs";
import {
  type TabsPanelProps,
  type UseTabsPanelProps,
} from "./tabs-panel.types";

const { panel: panelVariants } = tabs();

export function useTabsPanel(props: UseTabsPanelProps) {
  const { value: tabsValue, className, ...rest } = props;

  const { value: active, variant } = useTabs();
  const isActive = active === tabsValue;

  const tabsPanelProps = {
    ...rest,
    role: "tabpanel",
    "data-value": tabsValue,
    className: panelVariants({
      variant,
      className,
    }),
    style: {
      display: isActive ? "block" : "none",
      ...rest.style,
    },
  } as Omit<TabsPanelProps, "value">;

  return { tabsPanelProps };
}
