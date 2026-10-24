/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { useSlots } from 'vue';
import { PhX } from '@phosphor-icons/vue';
import { useChip } from './useChip';
const { defineProps, } = {};
const props = defineProps();
const slots = useSlots();
const { chipProps, hasRemove, removeButtonProps } = useChip(props, slots);
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
__VLS_withDotValue(hasRemove, {});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...(__VLS_unwrap(chipProps, {})),
});
var __VLS_0 = {};
if (hasRemove.value) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...(__VLS_unwrap(removeButtonProps, {})),
    });
    let __VLS_2;
    /** @ts-ignore @type { | typeof __VLS_components.PhX} */
    PhX;
    // @ts-ignore
    const __VLS_3 = __VLS_asFunctionalComponent1(__VLS_2, new __VLS_2({
        // @ts-ignore
        'aria-hidden': "true",
    }));
    const __VLS_4 = __VLS_3({
        'aria-hidden': "true",
    }, ...__VLS_functionalComponentArgsRest(__VLS_3));
}
var __VLS_1 = __VLS_0;
// @ts-ignore
[chipProps, hasRemove, removeButtonProps,];
const __VLS_base = (await import('vue')).defineComponent({
    __typeProps: {},
});
const __VLS_export = {};
export default {};
