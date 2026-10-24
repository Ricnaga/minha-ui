import { computed } from 'vue';
import { tabs } from '@/theme';
import { getTabsIds, useTabs } from '../Tabs/useTabs';
const { panel: panelVariants } = tabs();
export function useTabsPanel(props) {
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
        class: panelVariants({ variant, class: props.class }),
        style: { display: isActive.value ? 'block' : 'none' },
    }));
    return { tabsPanelProps, isActive };
}
