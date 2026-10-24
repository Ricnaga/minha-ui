/// <reference types="../../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { CardImage } from '../';
const { defineProps, withDefaults, } = {};
const props = withDefaults(defineProps(), {
    rounded: undefined,
    aspect: undefined,
    class: undefined,
    src: undefined,
    alt: undefined,
});
const __VLS_defaults = {
    rounded: undefined,
    aspect: undefined,
    class: undefined,
    src: undefined,
    alt: undefined,
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
/** @ts-ignore @type { | typeof __VLS_components.CardImage} */
CardImage;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    // @ts-ignore
    rounded: (props.rounded), aspect: (props.aspect), ...{ class: (props.class) }, src: (props.src), alt: (props.alt),
}));
const __VLS_2 = __VLS_1({
    rounded: (props.rounded),
    aspect: (props.aspect),
    ...{ class: (props.class) },
    src: (props.src),
    alt: (props.alt),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
    props: {},
});
export default {};
