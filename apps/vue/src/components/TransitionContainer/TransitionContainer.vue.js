/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { useTransitionContainer } from './useTransitionContainer';
const { defineProps, withDefaults, defineOptions, } = {};
// `aria-hidden` e `inert` são calculados pelo composable: os atributos do
// consumidor entram antes para que o estado do componente prevaleça.
defineOptions({ inheritAttrs: false });
const props = withDefaults(defineProps(), {
    ariaHidden: undefined,
    inert: undefined,
});
const { transitionContainerProps } = useTransitionContainer(props);
const __VLS_defaults = {
    ariaHidden: undefined,
    inert: undefined,
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
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...({ ...__VLS_ctx.$attrs, ...__VLS_unwrap(transitionContainerProps, {}) }),
});
var __VLS_0 = {};
var __VLS_1 = __VLS_0;
// @ts-ignore
[$attrs, transitionContainerProps,];
const __VLS_base = (await import('vue')).defineComponent({
    __typeProps: {},
    props: {},
});
const __VLS_export = {};
export default {};
