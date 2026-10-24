/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import RangeCalendarGrid from './_components/RangeCalendarGrid/RangeCalendarGrid.vue';
import RangeCalendarHeader from './_components/RangeCalendarHeader/RangeCalendarHeader.vue';
import { useRangeCalendarProvider } from './useRangeCalendar';
const { defineProps, } = {};
const props = defineProps();
useRangeCalendarProvider(props);
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
void __VLS_ctx, __VLS_components, __VLS_intrinsics, __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "bg-white" },
});
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
const __VLS_0 = RangeCalendarHeader;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
// @ts-ignore
}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const __VLS_5 = RangeCalendarGrid;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
// @ts-ignore
}));
const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
