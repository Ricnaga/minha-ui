/// <reference types="../../../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import TableHead from '../../../TableHead/TableHead.vue';
import TableRow from '../../../TableRow/TableRow.vue';
import { useTableConfig } from '../../../TableProvider/useTableProvider';
const __VLS_ctx = {};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
void __VLS_ctx, __VLS_components, __VLS_intrinsics, __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.thead, __VLS_intrinsics.thead)({});
const __VLS_0 = TableRow || TableRow;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
// @ts-ignore
}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_nonNull(__VLS_3.slots);
const __VLS_6 = __VLS_tryAsConstant((__VLS_unwrap(useTableConfig, {})().columns));
for (const [column] of __VLS_vFor(__VLS_nonNull(__VLS_6))) {
    const __VLS_7 = TableHead || TableHead;
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
        // @ts-ignore
        key: (column.id), align: (column.align),
    }));
    const __VLS_9 = __VLS_8({
        key: (column.id),
        align: (column.align),
    }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    const { default: __VLS_12 } = __VLS_nonNull(__VLS_10.slots);
    (column.label);
    // @ts-ignore
    [useTableConfig,];
    var __VLS_10;
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
