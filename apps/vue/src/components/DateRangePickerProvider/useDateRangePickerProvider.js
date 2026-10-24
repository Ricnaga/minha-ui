import { inject, provide } from 'vue';
import { useToggle } from '@/composables';
export const DateRangePickerProviderContextKey = Symbol('DateRangePickerProviderContext');
export function useDateRangePickerProvider(props) {
    const { onRangeDateChange } = props;
    const { isToggle: isOpen, handleClose, handleOpen } = useToggle();
    function handleRangeCalendarChange(value) {
        onRangeDateChange(value);
        if (value?.from && value?.to) {
            handleClose();
        }
    }
    const { children, ...rest } = props;
    const context = {
        children,
        isOpen: isOpen.value,
        handleClose,
        handleOpen,
        handleRangeCalendarChange,
        ...rest,
    };
    provide(DateRangePickerProviderContextKey, context);
    return context;
}
export function useDateRangePickerContext() {
    const context = inject(DateRangePickerProviderContextKey);
    if (!context) {
        throw new Error('useDateRangePickerContext must be used within a DateRangePickerProvider');
    }
    return context;
}
