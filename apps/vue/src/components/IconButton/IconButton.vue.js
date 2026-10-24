/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { iconButtonSpinner } from '@/theme';
import { Spinner } from '../Spinner';
import { useIconButton } from './useIconButton';
const { defineProps, } = {};
const props = defineProps();
const { iconButtonProps, isLoading } = useIconButton(props);
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
    ...(__VLS_unwrap(iconButtonProps, {})),
});
if (isLoading.value) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: (__VLS_unwrap(iconButtonSpinner, {})()) },
    });
    let __VLS_0;
    /** @ts-ignore @type { | typeof __VLS_components.Spinner} */
    Spinner;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    // @ts-ignore
    }));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
}
else {
    var __VLS_5 = {};
}
var __VLS_6 = __VLS_5;
// @ts-ignore
[iconButtonProps, isLoading, iconButtonSpinner,];
const __VLS_base = (await import('vue')).defineComponent({
    __typeProps: {},
});
const __VLS_export = {};
export default {};
