import { inject, provide, ref } from 'vue';
export const AccordionContextKey = Symbol('AccordionContext');
export function useAccordionProvider(props) {
    const type = props.type ?? 'single';
    const defaultValue = props.defaultValue ?? [];
    const accordionValue = ref(defaultValue);
    const isControlled = props.value !== undefined;
    const currentValue = isControlled ? props.value : accordionValue.value;
    function handleUpdateValue(nextValue) {
        if (!isControlled)
            accordionValue.value = nextValue;
        props.onValueChange?.(nextValue);
    }
    function handleToggle(item) {
        if (type === 'single') {
            handleUpdateValue(currentValue?.[0] === item ? [] : [item]);
            return;
        }
        handleUpdateValue(currentValue?.includes(item)
            ? (currentValue?.filter((i) => i !== item) ?? [])
            : [...(currentValue ?? []), item]);
    }
    const context = {
        handleToggle,
        currentValue,
        type,
        variant: props.variant,
        size: props.size,
    };
    provide(AccordionContextKey, context);
    return { children: props.children, ...context };
}
export function useAccordion() {
    const context = inject(AccordionContextKey);
    if (!context) {
        throw new Error('useAccordion must be used within a AccordionProvider');
    }
    return context;
}
