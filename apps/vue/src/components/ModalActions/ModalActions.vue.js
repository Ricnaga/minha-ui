/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import Button from '../Button/Button.vue';
import { useModalActions } from './useModalActions';
const { defineProps, } = {};
const props = defineProps();
const { modalActionsProps, onClose } = useModalActions(props);
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
    ...(__VLS_unwrap(modalActionsProps, {})),
});
const __VLS_0 = Button || Button;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    // @ts-ignore
    ...{ 'onClick': {} }, color: "error", variant: "outline",
}));
const __VLS_2 = __VLS_1({
    ...{ 'onClick': {} },
    color: "error",
    variant: "outline",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
const __VLS_6 = {
    /** @type {typeof __VLS_5.click} */
    onClick: (__VLS_unwrap(onClose, {})),
};
void __VLS_6;
const { default: __VLS_7 } = __VLS_nonNull(__VLS_3.slots);
// @ts-ignore
[modalActionsProps, onClose,];
var __VLS_3;
var __VLS_4;
const __VLS_8 = Button || Button;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
    // @ts-ignore
    type: "submit", color: "success",
}));
const __VLS_10 = __VLS_9({
    type: "submit",
    color: "success",
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
const { default: __VLS_13 } = __VLS_nonNull(__VLS_11.slots);
// @ts-ignore
[];
var __VLS_11;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
