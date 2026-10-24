/// <reference types="../../../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { calendar } from '@/theme';
import { useCalendarGrid } from './useCalendarGrid';
const { gridWrapper, gridDay } = calendar();
const { days, currentMonth, setValue, value } = useCalendarGrid();
function normalizeDate(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}
const __VLS_ctx = {};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
void __VLS_ctx, __VLS_components, __VLS_intrinsics, __VLS_directives;
// @ts-ignore
__VLS_withDotValue(value, {});
// @ts-ignore
__VLS_withDotValue(currentMonth, {});
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
                return (__VLS_unwrap(setValue, {})(day));
                // @ts-ignore
                [gridWrapper, days, setValue,];
            } },
        key: (day.toISOString()),
        'data-selected': (value.value && normalizeDate(day).getTime() === normalizeDate(value.value).getTime()),
        ...{ class: (__VLS_unwrap(gridDay, {})({
                isSelected: !!(value.value && normalizeDate(day).getTime() === normalizeDate(value.value).getTime()),
                hasNotSelectedAndHasNotOutsideMonth: !(value.value && normalizeDate(day).getTime() === normalizeDate(value.value).getTime()) && day.getMonth() !== currentMonth.value.getMonth(),
                hasNotSelectedAndIsOutsideMonth: !(value.value && normalizeDate(day).getTime() === normalizeDate(value.value).getTime()) && day.getMonth() !== currentMonth.value.getMonth(),
            })) },
    });
    (day.getDate());
    // @ts-ignore
    [value, value, value, value, value, value, value, value, gridDay, currentMonth, currentMonth,];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
