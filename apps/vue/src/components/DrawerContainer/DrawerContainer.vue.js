/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import Backdrop from '../Backdrop/Backdrop.vue';
import { useDrawerContainer } from './useDrawerContainer';
const { defineProps, } = {};
const props = defineProps();
const { drawerContainerProps, isOpen, onClose } = useDrawerContainer(props);
const cp = drawerContainerProps;
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
__VLS_withDotValue(cp, {});
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
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    role: (cp.value.role),
    'aria-modal': (cp.value['aria-modal']),
    'aria-label': (cp.value['aria-label']),
    ...{ class: (cp.value.class) },
});
var __VLS_6 = {};
// @ts-ignore
[isOpen, onClose, cp, cp, cp, cp,];
var __VLS_3;
var __VLS_7 = __VLS_6;
// @ts-ignore
[];
const __VLS_base = (await import('vue')).defineComponent({
    __typeProps: {},
});
const __VLS_export = {};
export default {};
