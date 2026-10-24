/// <reference types="../../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { PhInfo } from '@phosphor-icons/vue';
import { IconButton } from '../';
const { defineProps, withDefaults, } = {};
const props = withDefaults(defineProps(), {
    size: undefined,
    radius: undefined,
    variant: undefined,
    color: undefined,
    isLoading: false,
    disabled: false,
    class: undefined,
    type: undefined,
});
const __VLS_defaults = {
    size: undefined,
    radius: undefined,
    variant: undefined,
    color: undefined,
    isLoading: false,
    disabled: false,
    class: undefined,
    type: undefined,
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
/** @ts-ignore @type { | typeof __VLS_components.IconButton | typeof __VLS_components.IconButton} */
IconButton;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    // @ts-ignore
    size: (props.size), radius: (props.radius), variant: (props.variant), color: (props.color), isLoading: (props.isLoading), disabled: (props.disabled), ...{ class: (props.class) }, type: (props.type), 'aria-label': "Informações", onClick: (props.onClick),
}));
const __VLS_2 = __VLS_1({
    size: (props.size),
    radius: (props.radius),
    variant: (props.variant),
    color: (props.color),
    isLoading: (props.isLoading),
    disabled: (props.disabled),
    ...{ class: (props.class) },
    type: (props.type),
    'aria-label': "Informações",
    onClick: (props.onClick),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_nonNull(__VLS_3.slots);
let __VLS_6;
/** @ts-ignore @type { | typeof __VLS_components.PhInfo} */
PhInfo;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    // @ts-ignore
    ...{ class: "size-6" },
}));
const __VLS_8 = __VLS_7({
    ...{ class: "size-6" },
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
/** @type {__VLS_StyleScopedClasses['size-6']} */ ;
var __VLS_3;
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
    props: {},
});
export default {};
