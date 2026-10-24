import { inject, provide, ref, useId } from 'vue';
export const TabsContextKey = Symbol('TabsContext');
export function getTabsIds(baseId, value) {
    return {
        tabId: `${baseId}-tab-${value}`,
        panelId: `${baseId}-panel-${value}`,
    };
}
export function useTabsProvider(props) {
    const variant = props.variant ?? 'default';
    const baseId = useId();
    const prevValue = ref(props.value);
    function handleTabChange(newValue) {
        prevValue.value = props.value;
        props.onTabChange(newValue);
    }
    const context = {
        value: props.value,
        prevValue: prevValue.value,
        onTabChange: handleTabChange,
        variant,
        baseId,
    };
    provide(TabsContextKey, context);
    return context;
}
export function useTabs() {
    const context = inject(TabsContextKey);
    if (!context) {
        throw new Error('useTabs must be used within a TabsProvider');
    }
    return context;
}
