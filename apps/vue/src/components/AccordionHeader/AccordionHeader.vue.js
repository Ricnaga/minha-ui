/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { useAccordionHeader } from './useAccordionHeader';
const { defineProps, } = {};
const props = defineProps();
const { accordionHeaderProps } = useAccordionHeader(props);
const ah = accordionHeaderProps;
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
__VLS_withDotValue(ah, {});
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (ah.value.onClick) },
    'aria-expanded': (ah.value['aria-expanded']),
    ...{ class: (ah.value.class) },
});
var __VLS_0 = {};
var __VLS_1 = __VLS_0;
// @ts-ignore
[ah, ah, ah,];
const __VLS_base = (await import('vue')).defineComponent({
    __typeProps: {},
});
const __VLS_export = {};
export default {};
