/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { table } from '@/theme';
import Pagination from '../Pagination/Pagination.vue';
import { useTableConfig } from '../TableProvider/useTableProvider';
const { defineProps, } = {};
const props = defineProps();
const { pagination } = useTableConfig();
const { paginationWrapper } = table();
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
__VLS_withDotValue(pagination, {});
if (pagination.value.enabled) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: (__VLS_unwrap(paginationWrapper, {})({ className: props.className })) },
    });
    const __VLS_0 = Pagination;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        // @ts-ignore
        ...{ 'onPageChange': {} }, totalPages: (pagination.value.totalPages), currentPage: (pagination.value.pageNumber),
    }));
    const __VLS_2 = __VLS_1({
        ...{ 'onPageChange': {} },
        totalPages: (pagination.value.totalPages),
        currentPage: (pagination.value.pageNumber),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_5;
    const __VLS_6 = {
        /** @type {typeof __VLS_5.pageChange} */
        onPageChange: (pagination.value.onPageChange),
    };
    void __VLS_6;
    var __VLS_3;
    var __VLS_4;
}
// @ts-ignore
[pagination, pagination, pagination, pagination, paginationWrapper,];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
