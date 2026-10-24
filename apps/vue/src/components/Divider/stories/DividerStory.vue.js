/// <reference types="../../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { Divider } from '../';
const { defineProps, withDefaults, } = {};
const props = withDefaults(defineProps(), {
    orientation: undefined,
    inset: undefined,
    class: undefined,
});
const __VLS_defaults = {
    orientation: undefined,
    inset: undefined,
    class: undefined,
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
/** @ts-ignore @type { | typeof __VLS_components.Divider} */
Divider;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    // @ts-ignore
    orientation: (props.orientation), inset: (props.inset), ...{ class: (props.class) },
}));
const __VLS_2 = __VLS_1({
    orientation: (props.orientation),
    inset: (props.inset),
    ...{ class: (props.class) },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
    props: {},
});
export default {};
