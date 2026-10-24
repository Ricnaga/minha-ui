/// <reference types="../../../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import TablePagination from '../../../TablePagination/TablePagination.vue';
import { useTable } from '../../useTable';
import TableHeader from '../TableHeader/TableHeader.vue';
import TableContent from '../TableContent/TableContent.vue';
const { defineProps, } = {};
const props = defineProps();
const { root, table, status } = useTable();
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
    ...{ class: (__VLS_unwrap(root, {})({ className: props.className })) },
});
__VLS_asFunctionalElement1(__VLS_intrinsics.table, __VLS_intrinsics.table)({
    ...{ class: (__VLS_unwrap(table, {})()) },
});
const __VLS_0 = TableHeader;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
// @ts-ignore
}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const __VLS_5 = TableContent || TableContent;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
    // @ts-ignore
    status: (__VLS_unwrap(status, {})),
}));
const __VLS_7 = __VLS_6({
    status: (__VLS_unwrap(status, {})),
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
const { default: __VLS_10 } = __VLS_nonNull(__VLS_8.slots);
var __VLS_11 = {};
// @ts-ignore
[root, table, status,];
var __VLS_8;
const __VLS_13 = TablePagination;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent1(__VLS_13, new __VLS_13({
// @ts-ignore
}));
const __VLS_15 = __VLS_14({}, ...__VLS_functionalComponentArgsRest(__VLS_14));
var __VLS_12 = __VLS_11;
// @ts-ignore
[];
const __VLS_base = (await import('vue')).defineComponent({
    __typeProps: {},
});
const __VLS_export = {};
export default {};
