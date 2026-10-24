import type { TabsVariants } from '@/theme';

export interface UseTabsContextProps extends TabsVariants {
  children?: any;
  value: string;
  onTabChange: (tabValue: string) => void;
}

export type TabsProps = UseTabsContextProps;

export interface TabsIds {
  tabId: string;
  panelId: string;
}

export interface TabsContextProps extends TabsVariants {
  value: string;
  prevValue: string;
  onTabChange: (tabValue: string) => void;
  baseId: string;
}
