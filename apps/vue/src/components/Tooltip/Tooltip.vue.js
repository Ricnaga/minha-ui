/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { useTooltip } from './useTooltip';
const { defineProps, } = {};
const props = defineProps();
const { wrapperProps, content, tooltipProps } = useTooltip(props);
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
    ...(__VLS_unwrap(wrapperProps, {})),
});
var __VLS_0 = {};
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...(__VLS_unwrap(tooltipProps, {})),
});
(__VLS_unwrap(content, {}));
var __VLS_1 = __VLS_0;
// @ts-ignore
[wrapperProps, tooltipProps, content,];
const __VLS_base = (await import('vue')).defineComponent({
    __typeProps: {},
});
const __VLS_export = {};
export default {};
