import type { TabsVariant } from "../../theme";
import type { RequiredChildren } from "../../types";

export type UseTabsContextProps = TabsVariant &
  RequiredChildren<{
    value: string;
    onTabChange: (tabValue: string) => void;
  }>;
export type TabsProps = UseTabsContextProps;

export type TabsContextProps = Omit<UseTabsContextProps, "children">;
