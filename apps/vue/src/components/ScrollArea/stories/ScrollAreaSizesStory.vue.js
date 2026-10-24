/// <reference types="../../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { computed } from 'vue';
import { ScrollArea } from '../';
const sizes = ['sm', 'md', 'lg'];
const items = computed(() => Array.from({ length: 12 }, (_, index) => index + 1));
const __VLS_ctx = {};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
void __VLS_ctx, __VLS_components, __VLS_intrinsics, __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex gap-4" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
const __VLS_0 = __VLS_tryAsConstant((__VLS_unwrap(sizes, {})));
for (const [size] of __VLS_vFor(__VLS_nonNull(__VLS_0))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        key: (size),
        ...{ class: "flex flex-col gap-1 text-neutral-600" },
    });
    /** @type {__VLS_StyleScopedClasses['flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
    /** @type {__VLS_StyleScopedClasses['gap-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-neutral-600']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (size);
    let __VLS_1;
    /** @ts-ignore @type { | typeof __VLS_components.ScrollArea | typeof __VLS_components.ScrollArea} */
    ScrollArea;
    // @ts-ignore
    const __VLS_2 = __VLS_asFunctionalComponent1(__VLS_1, new __VLS_1({
        // @ts-ignore
        size: (size), ...{ class: "h-48 w-64" }, 'aria-label': (`Lista tamanho ${size}`),
    }));
    const __VLS_3 = __VLS_2({
        size: (size),
        ...{ class: "h-48 w-64" },
        'aria-label': (`Lista tamanho ${size}`),
    }, ...__VLS_functionalComponentArgsRest(__VLS_2));
    /** @type {__VLS_StyleScopedClasses['h-48']} */ ;
    /** @type {__VLS_StyleScopedClasses['w-64']} */ ;
    const { default: __VLS_6 } = __VLS_nonNull(__VLS_4.slots);
    __VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
        ...{ class: "space-y-2 p-2" },
    });
    /** @type {__VLS_StyleScopedClasses['space-y-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['p-2']} */ ;
    const __VLS_7 = __VLS_tryAsConstant((__VLS_unwrap(items, {})));
    for (const [item] of __VLS_vFor(__VLS_nonNull(__VLS_7))) {
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
        [sizes, items,];
    }
    // @ts-ignore
    [];
    var __VLS_4;
    // @ts-ignore
    [];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
