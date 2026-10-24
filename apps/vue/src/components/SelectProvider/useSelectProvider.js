import { inject, provide, ref } from 'vue';
import { useDisclosure } from '@/composables';
function resolveSelection(previous, option, isMultiple) {
    const key = option.key.toString();
    if (!previous.has(key)) {
        const next = isMultiple ? new Map(previous) : new Map();
        next.set(key, option);
        return next;
    }
    if (isMultiple) {
        const next = new Map(previous);
        next.delete(key);
        return next;
    }
    return new Map();
}
export const SelectProviderContextKey = Symbol('SelectProviderContext');
export function useSelectProvider(props) {
    const isMultiple = props.isMultiple ?? false;
    const { isOpen, handleOpen, handleClose } = useDisclosure();
    const selectedOptions = ref(new Map());
    function handleSelectChange(option) {
        selectedOptions.value = resolveSelection(selectedOptions.value, option, isMultiple);
        props.onSelectChange(Array.from(selectedOptions.value.values()));
    }
    const context = {
        ...props,
        isOpen: isOpen.value,
        handleOpen,
        handleClose,
        handleSelectChange,
        selectedOptions: selectedOptions.value,
        selectOption: Array.from(selectedOptions.value.values()),
    };
    provide(SelectProviderContextKey, context);
    return { children: props.children, ...context };
}
export function useSelectContext() {
    const context = inject(SelectProviderContextKey);
    if (!context) {
        throw new Error('useSelectContext must be used within a SelectProvider');
    }
    return context;
}
