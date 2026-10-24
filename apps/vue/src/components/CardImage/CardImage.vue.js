/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { useCardImage } from './useCardImage';
const { defineProps, } = {};
const props = defineProps();
const { cardImageProps } = useCardImage(props);
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
void __VLS_ctx, __VLS_components, __VLS_intrinsics, __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    ...(__VLS_unwrap(cardImageProps, {})),
});
// @ts-ignore
[cardImageProps,];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
