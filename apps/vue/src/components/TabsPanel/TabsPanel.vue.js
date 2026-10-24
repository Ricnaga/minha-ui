/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { useTabsPanel } from './useTabsPanel';
const { defineProps, } = {};
const props = defineProps();
const { tabsPanelProps } = useTabsPanel(props);
const tp = tabsPanelProps;
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
__VLS_withDotValue(tp, {});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    id: (tp.value.id),
    role: (tp.value.role),
    'aria-labelledby': (tp.value['aria-labelledby']),
    tabindex: (tp.value.tabindex),
    'data-value': (tp.value['data-value']),
    ...{ class: (tp.value.class) },
    ...{ style: (tp.value.style) },
});
var __VLS_0 = {};
var __VLS_1 = __VLS_0;
// @ts-ignore
[tp, tp, tp, tp, tp, tp, tp,];
const __VLS_base = (await import('vue')).defineComponent({
    __typeProps: {},
});
const __VLS_export = {};
export default {};
