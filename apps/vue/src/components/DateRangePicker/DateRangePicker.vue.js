/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import DateRangePickerPopover from '../DateRangePickerPopover/DateRangePickerPopover.vue';
import DateRangePickerProvider from '../DateRangePickerProvider/DateRangePickerProvider.vue';
import { useDateRangePicker } from './useDateRangePicker';
const { defineProps, } = {};
const props = defineProps();
const { dateRangePickerProps } = useDateRangePicker(props);
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
void __VLS_ctx, __VLS_components, __VLS_intrinsics, __VLS_directives;
const __VLS_0 = DateRangePickerProvider || DateRangePickerProvider;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    // @ts-ignore
    ...(__VLS_unwrap(dateRangePickerProps, {})),
}));
const __VLS_2 = __VLS_1({
    ...(__VLS_unwrap(dateRangePickerProps, {})),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_nonNull(__VLS_3.slots);
const __VLS_6 = DateRangePickerPopover;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
// @ts-ignore
}));
const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
// @ts-ignore
[dateRangePickerProps,];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
