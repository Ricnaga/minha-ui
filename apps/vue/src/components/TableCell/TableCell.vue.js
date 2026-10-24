/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { table } from '@/theme';
import { useTableConfig } from '../TableProvider/useTableProvider';
const { defineProps, withDefaults, } = {};
const props = withDefaults(defineProps(), {
    align: undefined,
});
const { size, bordered } = useTableConfig();
const { cell } = table({ size, bordered, align: props.align });
const __VLS_defaults = {
    align: undefined,
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
__VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
    ...{ class: (__VLS_unwrap(cell, {})({ className: props.className })) },
});
var __VLS_0 = {};
var __VLS_1 = __VLS_0;
// @ts-ignore
[cell,];
const __VLS_base = (await import('vue')).defineComponent({
    __typeProps: {},
    props: {},
});
const __VLS_export = {};
export default {};
