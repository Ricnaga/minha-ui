/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { useSliderThumb } from './useSliderThumb';
const { defineProps, } = {};
const props = defineProps();
const { thumbProps, bubbleProps, showValue, valueLabel } = useSliderThumb(props);
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
void __VLS_ctx, __VLS_components, __VLS_intrinsics, __VLS_directives;
// @ts-ignore
__VLS_withDotValue(showValue, {});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...(__VLS_unwrap(thumbProps, {})),
});
if (showValue.value) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...(__VLS_unwrap(bubbleProps, {})),
    });
    (__VLS_unwrap(valueLabel, {}));
}
// @ts-ignore
[thumbProps, showValue, bubbleProps, valueLabel,];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
