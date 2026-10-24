/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { useModalContainer } from './useModalContainer';
const { defineProps, } = {};
const props = defineProps();
const { modalContainerProps } = useModalContainer(props);
const cp = modalContainerProps;
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
__VLS_withDotValue(cp, {});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ref: (cp.value.ref),
    role: (cp.value.role),
    'aria-modal': (cp.value['aria-modal']),
    'aria-label': (cp.value['aria-label']),
    'data-testid': (cp.value['data-testid']),
    ...{ class: (cp.value.class) },
});
var __VLS_0 = {};
var __VLS_1 = __VLS_0;
// @ts-ignore
[cp, cp, cp, cp, cp, cp,];
const __VLS_base = (await import('vue')).defineComponent({
    __typeProps: {},
});
const __VLS_export = {};
export default {};
