/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { useTableProvider } from '../TableProvider/useTableProvider';
import TableLayout from './_components/TableLayout/TableLayout.vue';
const { defineProps, } = {};
const __VLS_export = ((__VLS_props, __VLS_ctx, __VLS_exposed, __VLS_setup = (async () => {
    const props = defineProps();
    useTableProvider(props);
    const __VLS_ctx = {
        ...{},
        ...{},
        ...{},
    };
    let __VLS_components;
    let __VLS_intrinsics;
    let __VLS_directives;
    void __VLS_ctx, __VLS_components, __VLS_intrinsics, __VLS_directives;
    const __VLS_0 = TableLayout || TableLayout;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        // @ts-ignore
        className: (props.className),
    }));
    const __VLS_2 = __VLS_1({
        className: (props.className),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const { default: __VLS_5 } = __VLS_nonNull(__VLS_3.slots);
    var __VLS_6 = {};
    var __VLS_3;
    var __VLS_7 = __VLS_6;
    return {};
})()) => ({}));
export default {};
