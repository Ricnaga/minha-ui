import { useDateRangePickerContext } from '../DateRangePickerProvider/useDateRangePickerProvider';
function formatToDate(value) {
    if (!value)
        return '';
    const date = value instanceof Date ? value : new Date(value);
    return date.toLocaleDateString('pt-BR');
}
export function useDateRangePickerInput() {
    const { handleOpen, dateValue } = useDateRangePickerContext();
    const formattedValue = Object.values(dateValue ?? {})
        .map((value) => formatToDate(value))
        .join(' - ');
    const inputProps = {
        readOnly: true,
        onMouseDown: handleOpen,
        value: formattedValue,
    };
    return { inputProps };
}
