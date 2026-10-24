/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { useSpinner } from './useSpinner';
const { defineProps, defineOptions, } = {};
defineOptions({ inheritAttrs: false });
const props = defineProps();
const { containerProps, wrapperProps, svgProps } = useSpinner(props);
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
    ...(__VLS_unwrap(containerProps, {})),
});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...(__VLS_unwrap(wrapperProps, {})),
});
__VLS_asFunctionalElement1(__VLS_intrinsics.svg, __VLS_intrinsics.svg)({
    ...({ ...__VLS_ctx.$attrs, ...__VLS_unwrap(svgProps, {}) }),
});
__VLS_asFunctionalElement1(__VLS_intrinsics.circle)({
    cx: "50",
    cy: "50",
    r: "20",
});
// @ts-ignore
[containerProps, wrapperProps, $attrs, svgProps,];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
