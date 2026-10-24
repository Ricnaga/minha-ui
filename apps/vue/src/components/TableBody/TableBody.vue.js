/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { computed } from 'vue';
import { table } from '@/theme';
import { useTableData } from '../TableProvider/useTableProvider';
const { defineProps, withDefaults, } = {};
const __VLS_export = ((__VLS_props, __VLS_ctx, __VLS_exposed, __VLS_setup = (async () => {
    const props = withDefaults(defineProps(), {
        children: undefined,
        className: '',
    });
    const context = useTableData();
    const { body } = table();
    const data = computed(() => props.data ?? context?.data ?? []);
    const keyExtractor = computed(() => props.keyExtractor ?? context?.keyExtractor);
    const __VLS_defaults = {
        children: undefined,
        className: '',
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
    __VLS_asFunctionalElement1(__VLS_intrinsics.tbody, __VLS_intrinsics.tbody)({
        ...{ class: (__VLS_unwrap(body, {})({ className: props.className })) },
    });
    if (typeof props.children === 'function') {
        const __VLS_0 = __VLS_tryAsConstant((__VLS_unwrap(data, {})));
        for (const [item, index] of __VLS_vFor(__VLS_nonNull(__VLS_0))) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.template)({
                key: (__VLS_unwrap(keyExtractor, {})?.(item, index) ?? index),
            });
            const __VLS_1 = (() => props.children?.(item, index));
            // @ts-ignore
            const __VLS_2 = __VLS_asFunctionalComponent1(__VLS_1, new __VLS_1({
            // @ts-ignore
            }));
            const __VLS_3 = __VLS_2({}, ...__VLS_functionalComponentArgsRest(__VLS_2));
            // @ts-ignore
            [body, data, keyExtractor,];
        }
    }
    else {
        var __VLS_6 = {};
    }
    var __VLS_7 = __VLS_6;
    // @ts-ignore
    [];
    return {};
})()) => ({}));
export default {};
