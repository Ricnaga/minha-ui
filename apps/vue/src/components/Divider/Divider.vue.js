/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { useDivider } from './useDivider';
const { defineProps, defineOptions, } = {};
// Os atributos de acessibilidade (`role`, `aria-*`) são definidos pelo
// composable e precisam vencer os atributos repassados pelo consumidor.
defineOptions({ inheritAttrs: false });
const props = defineProps();
const { dividerProps } = useDivider(props);
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
void __VLS_ctx, __VLS_components, __VLS_intrinsics, __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div)({
    ...({ ...__VLS_ctx.$attrs, ...__VLS_unwrap(dividerProps, {}) }),
});
// @ts-ignore
[$attrs, dividerProps,];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
