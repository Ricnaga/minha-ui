import { computed, inject, provide, useId } from 'vue';
export const DrawerContextKey = Symbol('DrawerContext');
export function useDrawerProvider(props) {
    const reactId = useId();
    const isOpen = computed(() => props.isOpen ?? false);
    const side = computed(() => props.side ?? 'right');
    const titleId = computed(() => props.titleId ?? reactId);
    const ariaLabel = computed(() => props.ariaLabel ?? 'Drawer');
    const context = {
        isOpen: isOpen.value,
        side: side.value,
        onClose: props.onClose,
        titleId: titleId.value,
        ariaLabel: ariaLabel.value,
    };
    provide(DrawerContextKey, context);
    return { children: props.children, ...context };
}
export function useDrawer() {
    const context = inject(DrawerContextKey);
    if (!context) {
        throw new Error('useDrawer must be used within a DrawerProvider');
    }
    return context;
}
