/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { PhCaretLeft, PhCaretRight } from '@phosphor-icons/vue';
import { pagination } from '@/theme';
import { PaginationButton } from './_components/PaginationButton';
import { PaginationControls } from './_components/PaginationControls';
import { usePagination } from './usePagination';
const { defineProps, } = {};
const { base, description, icons, items, wrapper } = pagination();
const props = defineProps();
const { paginationItems, handlePageChange, currentPage, totalPages } = usePagination(props);
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
    ...{ class: (__VLS_unwrap(base, {})()) },
});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: (__VLS_unwrap(wrapper, {})()) },
});
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.PaginationButton | typeof __VLS_components.PaginationButton} */
PaginationButton;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    // @ts-ignore
    ...{ 'onPageChange': {} }, 'aria-label': "Página anterior",
}));
const __VLS_2 = __VLS_1({
    ...{ 'onPageChange': {} },
    'aria-label': "Página anterior",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
const __VLS_6 = {
    /** @type {typeof __VLS_5.pageChange} */
    onPageChange: (() => __VLS_unwrap(handlePageChange, {})(__VLS_unwrap(currentPage, {}) - 1)),
};
void __VLS_6;
const { default: __VLS_7 } = __VLS_nonNull(__VLS_3.slots);
let __VLS_8;
/** @ts-ignore @type { | typeof __VLS_components.PhCaretLeft} */
PhCaretLeft;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
    // @ts-ignore
    ...{ class: (__VLS_unwrap(icons, {})()) },
}));
const __VLS_10 = __VLS_9({
    ...{ class: (__VLS_unwrap(icons, {})()) },
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
// @ts-ignore
[base, wrapper, handlePageChange, currentPage, icons,];
var __VLS_3;
var __VLS_4;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: (__VLS_unwrap(items, {})()) },
});
const __VLS_13 = __VLS_tryAsConstant((__VLS_unwrap(paginationItems, {})));
for (const [item] of __VLS_vFor(__VLS_nonNull(__VLS_13))) {
    let __VLS_14;
    /** @ts-ignore @type { | typeof __VLS_components.PaginationControls} */
    PaginationControls;
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent1(__VLS_14, new __VLS_14({
        // @ts-ignore
        ...{ 'onPageChange': {} }, key: (item.toString()), item: (item), currentPage: (__VLS_unwrap(currentPage, {})),
    }));
    const __VLS_16 = __VLS_15({
        ...{ 'onPageChange': {} },
        key: (item.toString()),
        item: (item),
        currentPage: (__VLS_unwrap(currentPage, {})),
    }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    let __VLS_19;
    const __VLS_20 = {
        /** @type {typeof __VLS_19.pageChange} */
        onPageChange: (() => typeof item === 'number' && __VLS_unwrap(handlePageChange, {})(item)),
    };
    void __VLS_20;
    var __VLS_17;
    var __VLS_18;
    // @ts-ignore
    [handlePageChange, currentPage, items, paginationItems,];
}
let __VLS_21;
/** @ts-ignore @type { | typeof __VLS_components.PaginationButton | typeof __VLS_components.PaginationButton} */
PaginationButton;
// @ts-ignore
const __VLS_22 = __VLS_asFunctionalComponent1(__VLS_21, new __VLS_21({
    // @ts-ignore
    ...{ 'onPageChange': {} }, 'aria-label': "Próxima página",
}));
const __VLS_23 = __VLS_22({
    ...{ 'onPageChange': {} },
    'aria-label': "Próxima página",
}, ...__VLS_functionalComponentArgsRest(__VLS_22));
let __VLS_26;
const __VLS_27 = {
    /** @type {typeof __VLS_26.pageChange} */
    onPageChange: (() => __VLS_unwrap(handlePageChange, {})(__VLS_unwrap(currentPage, {}) + 1)),
};
void __VLS_27;
const { default: __VLS_28 } = __VLS_nonNull(__VLS_24.slots);
let __VLS_29;
/** @ts-ignore @type { | typeof __VLS_components.PhCaretRight} */
PhCaretRight;
// @ts-ignore
const __VLS_30 = __VLS_asFunctionalComponent1(__VLS_29, new __VLS_29({
    // @ts-ignore
    ...{ class: (__VLS_unwrap(icons, {})()) },
}));
const __VLS_31 = __VLS_30({
    ...{ class: (__VLS_unwrap(icons, {})()) },
}, ...__VLS_functionalComponentArgsRest(__VLS_30));
// @ts-ignore
[handlePageChange, currentPage, icons,];
var __VLS_24;
var __VLS_25;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: (__VLS_unwrap(description, {})()) },
});
(__VLS_unwrap(currentPage, {}));
(__VLS_unwrap(totalPages, {}));
// @ts-ignore
[currentPage, description, totalPages,];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
