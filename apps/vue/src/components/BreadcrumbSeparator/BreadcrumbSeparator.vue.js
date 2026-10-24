/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { PhCaretRight } from '@phosphor-icons/vue';
import { useBreadcrumbSeparator } from './useBreadcrumbSeparator';
const { defineProps, } = {};
const props = defineProps();
const { separatorProps, content } = useBreadcrumbSeparator(props);
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
__VLS_withDotValue(content, {});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...(__VLS_unwrap(separatorProps, {})),
});
var __VLS_0 = {};
if (content.value !== undefined) {
    (content.value);
}
else {
    let __VLS_2;
    /** @ts-ignore @type { | typeof __VLS_components.PhCaretRight} */
    PhCaretRight;
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
[separatorProps, content, content,];
const __VLS_base = (await import('vue')).defineComponent({
    __typeProps: {},
});
const __VLS_export = {};
export default {};
