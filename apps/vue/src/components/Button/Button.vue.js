/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { Spinner } from '../Spinner';
import { useButton } from './useButton';
const { defineProps, } = {};
const props = defineProps();
const { buttonProps, isLoading, labelProps } = useButton(props);
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
__VLS_withDotValue(isLoading, {});
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...(__VLS_unwrap(buttonProps, {})),
});
if (isLoading.value) {
    let __VLS_0;
    /** @ts-ignore @type { | typeof __VLS_components.Spinner} */
    Spinner;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        // @ts-ignore
        color: (__VLS_ctx.color), ...{ class: "size-4" },
    }));
    const __VLS_2 = __VLS_1({
        color: (__VLS_ctx.color),
        ...{ class: "size-4" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    /** @type {__VLS_StyleScopedClasses['size-4']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...(__VLS_unwrap(labelProps, {})),
    });
    var __VLS_5 = {};
}
else {
    var __VLS_7 = {};
}
var __VLS_6 = __VLS_5, __VLS_8 = __VLS_7;
// @ts-ignore
[buttonProps, isLoading, color, labelProps,];
const __VLS_base = (await import('vue')).defineComponent({
    __typeProps: {},
});
const __VLS_export = {};
export default {};
