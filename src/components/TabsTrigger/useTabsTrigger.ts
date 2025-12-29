import { tabs } from "@/theme";
import { useTabs } from "../Tabs/useTabs";
import type {
  TabsTriggerProps,
  UseTabsTriggerProps,
} from "./tabs-trigger.types";

const { listItem } = tabs();

export function useTabsTrigger(props: UseTabsTriggerProps) {
  const { value: tabValue, isLoading = false, ...rest } = props;

  const { value: active, onTabChange, variant } = useTabs();

  const isActive = active === tabValue;

  const tabsTriggerProps: Omit<TabsTriggerProps, "value"> = {
    ...rest,
    onClick: () => onTabChange(tabValue),
    "aria-selected": isActive,
    "aria-busy": isLoading,
    role: "tab",
    className: listItem({ isSelected: isActive, variant }),
  };
  return { tabsTriggerProps };
}
