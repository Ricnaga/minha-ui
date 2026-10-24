/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import Backdrop from '../Backdrop/Backdrop.vue';
import ModalContainer from '../ModalContainer/ModalContainer.vue';
import { useModalProvider } from './useModal';
const { defineProps, } = {};
const props = defineProps();
const { isOpen, onClose, padding, radius, shadow } = useModalProvider(props);
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
void __VLS_ctx, __VLS_components, __VLS_intrinsics, __VLS_directives;
const __VLS_0 = Backdrop || Backdrop;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    // @ts-ignore
    isOpen: (__VLS_unwrap(isOpen, {})), onClose: (__VLS_unwrap(onClose, {})),
}));
const __VLS_2 = __VLS_1({
    isOpen: (__VLS_unwrap(isOpen, {})),
    onClose: (__VLS_unwrap(onClose, {})),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_nonNull(__VLS_3.slots);
const __VLS_6 = ModalContainer || ModalContainer;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    // @ts-ignore
    padding: (__VLS_unwrap(padding, {})), radius: (__VLS_unwrap(radius, {})), shadow: (__VLS_unwrap(shadow, {})),
}));
const __VLS_8 = __VLS_7({
    padding: (__VLS_unwrap(padding, {})),
    radius: (__VLS_unwrap(radius, {})),
    shadow: (__VLS_unwrap(shadow, {})),
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
const { default: __VLS_11 } = __VLS_nonNull(__VLS_9.slots);
var __VLS_12 = {};
// @ts-ignore
[isOpen, onClose, padding, radius, shadow,];
var __VLS_9;
// @ts-ignore
[];
var __VLS_3;
var __VLS_13 = __VLS_12;
// @ts-ignore
[];
const __VLS_base = (await import('vue')).defineComponent({
    __typeProps: {},
});
const __VLS_export = {};
export default {};
