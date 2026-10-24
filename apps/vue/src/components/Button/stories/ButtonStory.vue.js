/// <reference types="../../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { Button } from '../';
const { defineProps, withDefaults, } = {};
const props = withDefaults(defineProps(), {
    children: 'Button',
    variant: undefined,
    color: undefined,
    size: undefined,
    radius: undefined,
    isLoading: undefined,
    disabled: undefined,
    type: undefined,
    onClick: undefined,
});
const __VLS_defaults = {
    children: 'Button',
    variant: undefined,
    color: undefined,
    size: undefined,
    radius: undefined,
    isLoading: undefined,
    disabled: undefined,
    type: undefined,
    onClick: undefined,
};
void __VLS_defaults;
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
void __VLS_ctx, __VLS_components, __VLS_intrinsics, __VLS_directives;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.Button | typeof __VLS_components.Button} */
Button;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    // @ts-ignore
    ...{ 'onClick': {} }, variant: (props.variant), color: (props.color), size: (props.size), radius: (props.radius), isLoading: (props.isLoading), disabled: (props.disabled), type: (props.type),
}));
const __VLS_2 = __VLS_1({
    ...{ 'onClick': {} },
    variant: (props.variant),
    color: (props.color),
    size: (props.size),
    radius: (props.radius),
    isLoading: (props.isLoading),
    disabled: (props.disabled),
    type: (props.type),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
const __VLS_6 = {
    /** @type {typeof __VLS_5.click} */
    onClick: (props.onClick),
};
void __VLS_6;
const { default: __VLS_7 } = __VLS_nonNull(__VLS_3.slots);
(props.children);
var __VLS_3;
var __VLS_4;
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
    props: {},
});
export default {};
