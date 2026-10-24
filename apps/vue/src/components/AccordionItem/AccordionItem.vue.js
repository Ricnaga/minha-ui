/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { accordion } from '@/theme';
import { useAccordion } from '../Accordion/useAccordion';
import { provideAccordionItem, useAccordionItemProvider } from './useAccordionItem';
const { defineProps, } = {};
const { accordionItem } = accordion();
const props = defineProps();
const { value: itemValue } = useAccordionItemProvider(props);
const { currentValue, variant, size } = useAccordion();
const isOpen = currentValue?.includes(itemValue);
provideAccordionItem({ value: itemValue, isOpen, variant, size });
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
    role: "presentation",
    ...{ class: (__VLS_unwrap(accordionItem, {})({ variant: __VLS_unwrap(variant, {}), size: __VLS_unwrap(size, {}) })) },
});
var __VLS_0 = {};
var __VLS_1 = __VLS_0;
// @ts-ignore
[accordionItem, variant, size,];
const __VLS_base = (await import('vue')).defineComponent({
    __typeProps: {},
});
const __VLS_export = {};
export default {};
