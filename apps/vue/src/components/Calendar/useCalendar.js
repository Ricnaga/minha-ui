import { inject, provide } from 'vue';
export const CalendarContextKey = Symbol('CalendarContext');
let _currentMonth = new Date();
let _uncontrolledValue = null;
export function useCalendarProvider(props) {
    const { value: controlledValue, onDateChange, locale = 'pt-BR' } = props;
    const value = controlledValue !== undefined ? controlledValue : _uncontrolledValue;
    if (!(_currentMonth instanceof Date))
        _currentMonth = value ? new Date(value) : new Date();
    function setValue(date) {
        onDateChange?.(date);
        _uncontrolledValue = date;
    }
    function goToNextMonth() {
        _currentMonth = new Date(_currentMonth.getFullYear(), _currentMonth.getMonth() + 1, 1);
    }
    function goToPrevMonth() {
        _currentMonth = new Date(_currentMonth.getFullYear(), _currentMonth.getMonth() - 1, 1);
    }
    const context = {
        value,
        setValue,
        currentMonth: _currentMonth,
        goToNextMonth,
        goToPrevMonth,
        locale,
    };
    provide(CalendarContextKey, context);
    return context;
}
export function useCalendar() {
    const context = inject(CalendarContextKey);
    if (!context) {
        throw new Error('useCalendar must be used within a CalendarProvider');
    }
    return context;
}
