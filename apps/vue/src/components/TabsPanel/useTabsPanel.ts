import { computed } from 'vue';

import { tabs } from '@/theme';

import { getTabsIds, useTabs } from '../Tabs/useTabs';
import type { UseTabsPanelProps } from './tabs-panel.types';

const { panel: panelVariants } = tabs();

export function useTabsPanel(props: UseTabsPanelProps) {
  const { value: tabsValue } = props;
  const { value: active, variant, baseId } = useTabs();
  const isActive = computed(() => active === tabsValue);
  const { tabId, panelId } = getTabsIds(baseId, tabsValue);

  const tabsPanelProps = computed(() => ({
    ...props,
    id: panelId,
    role: 'tabpanel',
    'aria-labelledby': tabId,
    tabindex: 0,
    'data-value': tabsValue,
    class: panelVariants({ variant, class: props.class } as Parameters<typeof panelVariants>[0]),
    style: { display: isActive.value ? 'block' : 'none' },
  }));

  return { tabsPanelProps, isActive };
}
