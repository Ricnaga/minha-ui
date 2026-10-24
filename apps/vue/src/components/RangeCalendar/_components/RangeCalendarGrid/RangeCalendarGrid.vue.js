/// <reference types="../../../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { rangeCalendar } from '@/theme';
import { useRangeCalendarGrid } from './useRangeCalendarGrid';
const { gridWrapper, gridDay } = rangeCalendar();
const { days, currentMonth, setRange, value } = useRangeCalendarGrid();
function normalizeDate(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}
const __VLS_ctx = {};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
void __VLS_ctx, __VLS_components, __VLS_intrinsics, __VLS_directives;
// @ts-ignore
__VLS_withDotValue(currentMonth, {});
// @ts-ignore
__VLS_withDotValue(value, {});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: (__VLS_unwrap(gridWrapper, {})()) },
    role: "region",
    'aria-label': "Calendário",
});
const __VLS_0 = __VLS_tryAsConstant((__VLS_unwrap(days, {})));
for (const [day] of __VLS_vFor(__VLS_nonNull(__VLS_0))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: // @ts-ignore
            (...[$event]) => {
                void $event;
                return (__VLS_unwrap(setRange, {})(day));
                // @ts-ignore
                [gridWrapper, days, setRange,];
            } },
        key: (day.toISOString()),
        ...{ class: (__VLS_unwrap(gridDay, {})({
                isOutsideMonth: day.getMonth() !== currentMonth.value.getMonth(),
                isInRange: !!(value.value.from && value.value.to && normalizeDate(day) > normalizeDate(value.value.from) && normalizeDate(day) < normalizeDate(value.value.to)),
                isRangeStart: !!(value.value.from && normalizeDate(day).getTime() === normalizeDate(value.value.from).getTime() && value.value.to),
                isRangeEnd: !!(value.value.to && normalizeDate(day).getTime() === normalizeDate(value.value.to).getTime() && value.value.from),
                isSelected: !!(value.value.from && !value.value.to && normalizeDate(day).getTime() === normalizeDate(value.value.from).getTime()),
            })) },
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "relative z-20" },
    });
    /** @type {__VLS_StyleScopedClasses['relative']} */ ;
    /** @type {__VLS_StyleScopedClasses['z-20']} */ ;
    (day.getDate());
    // @ts-ignore
    [gridDay, currentMonth, value, value, value, value, value, value, value, value, value, value, value, value, value,];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
