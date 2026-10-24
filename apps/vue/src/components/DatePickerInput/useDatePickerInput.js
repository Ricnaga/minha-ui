import { useDatePickerContext } from '../DatePickerProvider/useDatePickerProvider';
function formatToDate(value) {
    if (!value)
        return '';
    const date = value instanceof Date ? value : new Date(value);
    return date.toLocaleDateString('pt-BR');
}
export function useDatePickerInput() {
    const { handleOpen, dateValue } = useDatePickerContext();
    const formattedValue = formatToDate(dateValue ?? new Date());
    const inputProps = {
        readOnly: true,
        onMouseDown: handleOpen,
        value: formattedValue,
    };
    return { inputProps };
}
