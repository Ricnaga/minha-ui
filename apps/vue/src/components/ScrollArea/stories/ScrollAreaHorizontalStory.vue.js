/// <reference types="../../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { computed } from 'vue';
import { ScrollArea } from '../';
const { defineProps, withDefaults, } = {};
const props = withDefaults(defineProps(), {
    orientation: undefined,
    size: undefined,
    class: undefined,
    count: 20,
    label: 'Lista horizontal de itens',
});
const items = computed(() => Array.from({ length: props.count }, (_, index) => index + 1));
const __VLS_defaults = {
    orientation: undefined,
    size: undefined,
    class: undefined,
    count: 20,
    label: 'Lista horizontal de itens',
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
/** @ts-ignore @type { | typeof __VLS_components.ScrollArea | typeof __VLS_components.ScrollArea} */
ScrollArea;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    // @ts-ignore
    orientation: (props.orientation), size: (props.size), ...{ class: (props.class) }, 'aria-label': (props.label),
}));
const __VLS_2 = __VLS_1({
    orientation: (props.orientation),
    size: (props.size),
    ...{ class: (props.class) },
    'aria-label': (props.label),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_nonNull(__VLS_3.slots);
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: "flex gap-2 p-2" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
const __VLS_6 = __VLS_tryAsConstant((__VLS_unwrap(items, {})));
for (const [item] of __VLS_vFor(__VLS_nonNull(__VLS_6))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        key: (item),
        ...{ class: "rounded bg-neutral-800 p-2 text-neutral-100" },
    });
    /** @type {__VLS_StyleScopedClasses['rounded']} */ ;
    /** @type {__VLS_StyleScopedClasses['bg-neutral-800']} */ ;
    /** @type {__VLS_StyleScopedClasses['p-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-neutral-100']} */ ;
    (item);
    // @ts-ignore
    [items,];
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
    props: {},
});
export default {};
