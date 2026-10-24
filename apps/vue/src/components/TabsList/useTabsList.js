import { computed, ref } from 'vue';
import { tabs } from '@/theme';
import { useTabs } from '../Tabs/useTabs';
const { wrapper } = tabs();
export function useTabsList(props) {
    const { variant } = useTabs();
    const listRef = ref(null);
    function getTabs() {
        const list = listRef.value;
        if (!list)
            return [];
        return Array.from(list.querySelectorAll('[role="tab"]:not([disabled])'));
    }
    function moveFocus(nextIndex) {
        const items = getTabs();
        if (items.length === 0)
            return;
        const normalizedIndex = (nextIndex + items.length) % items.length;
        items[normalizedIndex]?.focus();
    }
    function handleKeyDown(event) {
        const items = getTabs();
        const currentIndex = items.indexOf(document.activeElement);
        if (currentIndex === -1)
            return;
        switch (event.key) {
            case 'ArrowRight':
            case 'ArrowDown':
                event.preventDefault();
                moveFocus(currentIndex + 1);
                return;
            case 'ArrowLeft':
            case 'ArrowUp':
                event.preventDefault();
                moveFocus(currentIndex - 1);
                return;
            case 'Home':
                event.preventDefault();
                moveFocus(0);
                return;
            case 'End':
                event.preventDefault();
                moveFocus(items.length - 1);
                return;
            default:
                return;
        }
    }
    const tabsListProps = computed(() => ({
        ...props,
        ref: listRef,
        role: 'tablist',
        onKeydown: handleKeyDown,
        class: wrapper({ variant, class: props.class }),
    }));
    return { tabsListProps };
}
