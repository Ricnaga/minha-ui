import { inject, provide } from 'vue';
export const RangeCalendarContextKey = Symbol('RangeCalendarContext');
let _uncontrolledValue = { from: null, to: null };
let _currentMonth = new Date();
export function useRangeCalendarProvider(props) {
    const { value: controlledValue, onDateChange, locale = 'pt-BR' } = props;
    const value = controlledValue ?? _uncontrolledValue;
    if (!(value.from instanceof Date))
        _currentMonth = value.from ? new Date(value.from) : _currentMonth;
    function setRange(date) {
        if (!value.from || value.to) {
            const next = { from: date, to: null };
            onDateChange?.(next);
            _uncontrolledValue = next;
            return;
        }
        if (date < value.from) {
            const next = { from: date, to: value.from };
            onDateChange?.(next);
            _uncontrolledValue = next;
            return;
        }
        if (date.getTime() === value.from.getTime()) {
            const next = { from: date, to: date };
            onDateChange?.(next);
            _uncontrolledValue = next;
            return;
        }
        const next = { from: value.from, to: date };
        onDateChange?.(next);
        _uncontrolledValue = next;
    }
    function goToNextMonth() {
        _currentMonth = new Date(_currentMonth.getFullYear(), _currentMonth.getMonth() + 1, 1);
    }
    function goToPrevMonth() {
        _currentMonth = new Date(_currentMonth.getFullYear(), _currentMonth.getMonth() - 1, 1);
    }
    const context = {
        value,
        setRange,
        currentMonth: _currentMonth,
        goToNextMonth,
        goToPrevMonth,
        locale,
    };
    provide(RangeCalendarContextKey, context);
    return context;
}
export function useRangeCalendar() {
    const context = inject(RangeCalendarContextKey);
    if (!context) {
        throw new Error('useRangeCalendar must be used within a RangeCalendarProvider');
    }
    return context;
}
