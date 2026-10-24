import { inject, provide } from 'vue';
import { useToggle } from '@/composables';
export const DatePickerProviderContextKey = Symbol('DatePickerProviderContext');
export function useDatePickerProvider(props) {
    const { onDateChange } = props;
    const { isToggle: isOpen, handleClose, handleOpen } = useToggle();
    function handleCalendarChange(value) {
        onDateChange(value);
    }
    const { children, ...rest } = props;
    const context = {
        children,
        isOpen: isOpen.value,
        handleClose,
        handleOpen,
        handleCalendarChange,
        ...rest,
    };
    provide(DatePickerProviderContextKey, context);
    return context;
}
export function useDatePickerContext() {
    const context = inject(DatePickerProviderContextKey);
    if (!context) {
        throw new Error('useDatePickerContext must be used within a DatePickerProvider');
    }
    return context;
}
