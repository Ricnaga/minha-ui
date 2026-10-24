/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { useBadge } from './useBadge';
const { defineProps, defineOptions, } = {};
// O elemento raiz é o envoltório; os atributos nativos pertencem ao badge em si.
defineOptions({ inheritAttrs: false });
const props = defineProps();
const { badgeProps, value, wrapperProps } = useBadge(props);
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
__VLS_withDotValue(value, {});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...(__VLS_unwrap(wrapperProps, {})),
});
var __VLS_0 = {};
if (value.value) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...({ ...__VLS_ctx.$attrs, ...__VLS_unwrap(badgeProps, {}) }),
    });
    (value.value);
}
var __VLS_1 = __VLS_0;
// @ts-ignore
[wrapperProps, value, value, $attrs, badgeProps,];
const __VLS_base = (await import('vue')).defineComponent({
    __typeProps: {},
});
const __VLS_export = {};
export default {};
