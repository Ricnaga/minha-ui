/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { Spinner } from '../Spinner';
import { useBackdrop } from './useBackdrop';
const { defineProps, } = {};
const props = defineProps();
const { backdropProps, wrapperProps } = useBackdrop(props);
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
    ...(__VLS_unwrap(backdropProps, {})),
});
var __VLS_0 = {};
if (props.isLoading) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...(__VLS_unwrap(wrapperProps, {})),
    });
    let __VLS_2;
    /** @ts-ignore @type { | typeof __VLS_components.Spinner} */
    Spinner;
    // @ts-ignore
    const __VLS_3 = __VLS_asFunctionalComponent1(__VLS_2, new __VLS_2({
        // @ts-ignore
        color: "primary", thickness: "lg", ...{ class: "size-20" },
    }));
    const __VLS_4 = __VLS_3({
        color: "primary",
        thickness: "lg",
        ...{ class: "size-20" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_3));
    /** @type {__VLS_StyleScopedClasses['size-20']} */ ;
}
var __VLS_1 = __VLS_0;
// @ts-ignore
[backdropProps, wrapperProps,];
const __VLS_base = (await import('vue')).defineComponent({
    __typeProps: {},
});
const __VLS_export = {};
export default {};
