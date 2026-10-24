/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { useCardHeader } from './useCardHeader';
const { defineProps, } = {};
const props = defineProps();
const { cardHeaderProps } = useCardHeader(props);
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
void __VLS_ctx, __VLS_components, __VLS_intrinsics, __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.header, __VLS_intrinsics.header)({
    ...(__VLS_unwrap(cardHeaderProps, {})),
});
var __VLS_0 = {};
var __VLS_1 = __VLS_0;
// @ts-ignore
[cardHeaderProps,];
const __VLS_base = (await import('vue')).defineComponent({
    __typeProps: {},
});
const __VLS_export = {};
export default {};
