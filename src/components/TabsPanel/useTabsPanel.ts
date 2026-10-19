import { tabs } from '@/theme';
import { getTabsIds, useTabs } from '../Tabs/useTabs';
import {
  type TabsPanelProps,
  type UseTabsPanelProps,
} from './tabs-panel.types';

const { panel: panelVariants } = tabs();

export function useTabsPanel(props: UseTabsPanelProps) {
  const { value: tabsValue, className, ...rest } = props;

  const { value: active, variant, baseId } = useTabs();
  const isActive = active === tabsValue;
  const { tabId, panelId } = getTabsIds(baseId, tabsValue);

  const tabsPanelProps = {
    ...rest,
    id: panelId,
    role: 'tabpanel',
    'aria-labelledby': tabId,
    tabIndex: 0,
    'data-value': tabsValue,
    className: panelVariants({
      variant,
      className,
    }),
    style: {
      display: isActive ? 'block' : 'none',
      ...rest.style,
    },
  } as Omit<TabsPanelProps, 'value'>;

  return { tabsPanelProps };
}
