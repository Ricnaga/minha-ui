import { tabs } from '@/theme';
import { useTabs, getTabsIds } from '../Tabs/useTabs';
import type {
  TabsTriggerProps,
  UseTabsTriggerProps,
} from './tabs-trigger.types';

const { listItem } = tabs();

export function useTabsTrigger(props: UseTabsTriggerProps) {
  const { value: tabValue, isLoading = false, ...rest } = props;

  const { value: active, onTabChange, variant, baseId } = useTabs();

  const isActive = active === tabValue;
  const { tabId, panelId } = getTabsIds(baseId, tabValue);

  const tabsTriggerProps: Omit<TabsTriggerProps, 'value'> = {
    ...rest,
    id: tabId,
    type: 'button',
    onClick: () => onTabChange(tabValue),
    'aria-selected': isActive,
    'aria-busy': isLoading,
    'aria-controls': panelId,
    tabIndex: isActive ? 0 : -1,
    role: 'tab',
    className: listItem({ isSelected: isActive, variant }),
  };
  return { tabsTriggerProps };
}
