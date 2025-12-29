import { tabs } from "@/theme";
import { useTabs } from "../Tabs/useTabs";
import type { TabsListProps, UseTabsListProps } from "./tabs-list.types";

const { wrapper } = tabs();

export function useTabsList(props: UseTabsListProps) {
  const { variant } = useTabs();
  const tabsListProps: TabsListProps = {
    ...props,
    className: wrapper({ variant }),
  };
  return { tabsListProps };
}
