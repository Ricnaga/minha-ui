/// <reference types="../../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { ref } from 'vue';
import { Accordion, AccordionContent, AccordionHeader, AccordionItem, } from '../../';
const { defineProps, withDefaults, } = {};
const props = withDefaults(defineProps(), {
    type: 'single',
    size: undefined,
    variant: undefined,
    defaultValue: () => [],
    onValueChange: undefined,
});
const value = ref(props.defaultValue);
function handleValueChange(nextValue) {
    value.value = nextValue;
    props.onValueChange?.(nextValue);
}
const __VLS_defaults = {
    type: 'single',
    size: undefined,
    variant: undefined,
    defaultValue: () => [],
    onValueChange: undefined,
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
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
(JSON.stringify(__VLS_unwrap(value, {})));
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.Accordion | typeof __VLS_components.Accordion} */
Accordion;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    // @ts-ignore
    ...{ 'onUpdate:value': {} }, type: (__VLS_ctx.type), size: (__VLS_ctx.size), variant: (__VLS_ctx.variant), value: (__VLS_unwrap(value, {})),
}));
const __VLS_2 = __VLS_1({
    ...{ 'onUpdate:value': {} },
    type: (__VLS_ctx.type),
    size: (__VLS_ctx.size),
    variant: (__VLS_ctx.variant),
    value: (__VLS_unwrap(value, {})),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
const __VLS_6 = {
    /** @type {typeof __VLS_5.'update:value'} */
    'onUpdate:value': (handleValueChange),
};
void __VLS_6;
const { default: __VLS_7 } = __VLS_nonNull(__VLS_3.slots);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "my-4" },
});
/** @type {__VLS_StyleScopedClasses['my-4']} */ ;
let __VLS_8;
/** @ts-ignore @type { | typeof __VLS_components.AccordionItem | typeof __VLS_components.AccordionItem} */
AccordionItem;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
    // @ts-ignore
    value: "item-1",
}));
const __VLS_10 = __VLS_9({
    value: "item-1",
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
const { default: __VLS_13 } = __VLS_nonNull(__VLS_11.slots);
let __VLS_14;
/** @ts-ignore @type { | typeof __VLS_components.AccordionHeader | typeof __VLS_components.AccordionHeader} */
AccordionHeader;
// @ts-ignore
const __VLS_15 = __VLS_asFunctionalComponent1(__VLS_14, new __VLS_14({
// @ts-ignore
}));
const __VLS_16 = __VLS_15({}, ...__VLS_functionalComponentArgsRest(__VLS_15));
const { default: __VLS_19 } = __VLS_nonNull(__VLS_17.slots);
// @ts-ignore
[value, value, type, size, variant,];
var __VLS_17;
let __VLS_20;
/** @ts-ignore @type { | typeof __VLS_components.AccordionContent | typeof __VLS_components.AccordionContent} */
AccordionContent;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent1(__VLS_20, new __VLS_20({
// @ts-ignore
}));
const __VLS_22 = __VLS_21({}, ...__VLS_functionalComponentArgsRest(__VLS_21));
const { default: __VLS_25 } = __VLS_nonNull(__VLS_23.slots);
// @ts-ignore
[];
var __VLS_23;
// @ts-ignore
[];
var __VLS_11;
let __VLS_26;
/** @ts-ignore @type { | typeof __VLS_components.AccordionItem | typeof __VLS_components.AccordionItem} */
AccordionItem;
// @ts-ignore
const __VLS_27 = __VLS_asFunctionalComponent1(__VLS_26, new __VLS_26({
    // @ts-ignore
    value: "item-2",
}));
const __VLS_28 = __VLS_27({
    value: "item-2",
}, ...__VLS_functionalComponentArgsRest(__VLS_27));
const { default: __VLS_31 } = __VLS_nonNull(__VLS_29.slots);
let __VLS_32;
/** @ts-ignore @type { | typeof __VLS_components.AccordionHeader | typeof __VLS_components.AccordionHeader} */
AccordionHeader;
// @ts-ignore
const __VLS_33 = __VLS_asFunctionalComponent1(__VLS_32, new __VLS_32({
// @ts-ignore
}));
const __VLS_34 = __VLS_33({}, ...__VLS_functionalComponentArgsRest(__VLS_33));
const { default: __VLS_37 } = __VLS_nonNull(__VLS_35.slots);
// @ts-ignore
[];
var __VLS_35;
let __VLS_38;
/** @ts-ignore @type { | typeof __VLS_components.AccordionContent | typeof __VLS_components.AccordionContent} */
AccordionContent;
// @ts-ignore
const __VLS_39 = __VLS_asFunctionalComponent1(__VLS_38, new __VLS_38({
// @ts-ignore
}));
const __VLS_40 = __VLS_39({}, ...__VLS_functionalComponentArgsRest(__VLS_39));
const { default: __VLS_43 } = __VLS_nonNull(__VLS_41.slots);
// @ts-ignore
[];
var __VLS_41;
// @ts-ignore
[];
var __VLS_29;
// @ts-ignore
[];
var __VLS_3;
var __VLS_4;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
    props: {},
});
export default {};
