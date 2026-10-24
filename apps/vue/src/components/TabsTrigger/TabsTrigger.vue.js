/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { useTabsTrigger } from './useTabsTrigger';
const { defineProps, } = {};
const props = defineProps();
const { tabsTriggerProps } = useTabsTrigger(props);
const tt = tabsTriggerProps;
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
__VLS_withDotValue(tt, {});
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (tt.value.onClick) },
    id: (tt.value.id),
    type: (tt.value.type),
    'aria-selected': (tt.value['aria-selected']),
    'aria-busy': (tt.value['aria-busy']),
    'aria-controls': (tt.value['aria-controls']),
    tabindex: (tt.value.tabindex),
    role: (tt.value.role),
    ...{ class: (tt.value.class) },
});
var __VLS_0 = {};
var __VLS_1 = __VLS_0;
// @ts-ignore
[tt, tt, tt, tt, tt, tt, tt, tt, tt,];
const __VLS_base = (await import('vue')).defineComponent({
    __typeProps: {},
});
const __VLS_export = {};
export default {};
