/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { PhX } from '@phosphor-icons/vue';
import { useModalHeader } from './useModalHeader';
const { defineProps, } = {};
const props = defineProps();
const { modalHeaderProps, closeButtonProps } = useModalHeader(props);
const cb = closeButtonProps;
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
__VLS_withDotValue(cb, {});
__VLS_asFunctionalElement1(__VLS_intrinsics.header, __VLS_intrinsics.header)({
    ...(__VLS_unwrap(modalHeaderProps, {})),
});
var __VLS_0 = {};
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: cb.value.onClick },
    type: cb.value.type,
    'aria-label': cb.value['aria-label'],
    ...{ class: cb.value.class },
});
let __VLS_2;
/** @ts-ignore @type { | typeof __VLS_components.PhX} */
PhX;
// @ts-ignore
const __VLS_3 = __VLS_asFunctionalComponent1(__VLS_2, new __VLS_2({
// @ts-ignore
}));
const __VLS_4 = __VLS_3({}, ...__VLS_functionalComponentArgsRest(__VLS_3));
var __VLS_1 = __VLS_0;
// @ts-ignore
[modalHeaderProps, cb, cb, cb, cb,];
const __VLS_base = (await import('vue')).defineComponent({
    __typeProps: {},
});
const __VLS_export = {};
export default {};
