import { computed } from 'vue';
import { tabs } from '@/theme';
import { getTabsIds, useTabs } from '../Tabs/useTabs';
const { listItem } = tabs();
export function useTabsTrigger(props) {
    const { value: tabValue, isLoading = false } = props;
    const { value: active, onTabChange, variant, baseId } = useTabs();
    const isActive = computed(() => active === tabValue);
    const { tabId, panelId } = getTabsIds(baseId, tabValue);
    const tabsTriggerProps = computed(() => ({
        ...props,
        id: tabId,
        type: 'button',
        onClick: () => onTabChange(tabValue),
        'aria-selected': isActive.value,
        'aria-busy': isLoading,
        'aria-controls': panelId,
        tabindex: isActive.value ? 0 : -1,
        role: 'tab',
        class: listItem({ isSelected: isActive.value, variant, class: props.class }),
    }));
    return { tabsTriggerProps };
}
