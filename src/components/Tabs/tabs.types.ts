import type { TabsVariants } from "@/theme";
import type { RequiredChildren } from "@/types";

export interface UseTabsContextProps extends TabsVariants, RequiredChildren {
  value: string;
  onTabChange: (tabValue: string) => void;
}

export type TabsProps = UseTabsContextProps;

export type TabsContextProps = Omit<UseTabsContextProps, "children">;
