/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { PhWarningCircle } from '@phosphor-icons/vue';
import { h } from 'vue';
import { useErrorState } from './useErrorState';
const { defineProps, defineSlots, } = {};
const DefaultImage = h(PhWarningCircle, { size: 48, 'aria-hidden': 'true' });
const props = defineProps();
const slots = defineSlots();
const { rootProps, imageProps, titleProps, messageProps, actionProps, message, } = useErrorState(props);
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
__VLS_withDotValue(message, {});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...(__VLS_unwrap(rootProps, {})),
});
if (slots.image !== undefined || props.image !== undefined) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...(__VLS_unwrap(imageProps, {})),
    });
    __VLS_asFunctionalSlot(slots.image)({});
    const __VLS_1 = (props.image === undefined ? __VLS_unwrap(DefaultImage, {}) : props.image);
    // @ts-ignore
    const __VLS_2 = __VLS_asFunctionalComponent1(__VLS_1, new __VLS_1({
    // @ts-ignore
    }));
    const __VLS_3 = __VLS_2({}, ...__VLS_functionalComponentArgsRest(__VLS_2));
}
if (slots.title !== undefined || props.title !== undefined) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...(__VLS_unwrap(titleProps, {})),
    });
    __VLS_asFunctionalSlot(slots.title)({});
    (props.title);
}
if (message.value !== null && message.value !== undefined) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...(__VLS_unwrap(messageProps, {})),
    });
    __VLS_asFunctionalSlot(slots.message)({});
    if (typeof message.value === 'object') {
        const __VLS_8 = (message.value);
        // @ts-ignore
        const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
        // @ts-ignore
        }));
        const __VLS_10 = __VLS_9({}, ...__VLS_functionalComponentArgsRest(__VLS_9));
    }
    else {
        (message.value);
    }
}
if (slots.action !== undefined || props.action !== undefined) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...(__VLS_unwrap(actionProps, {})),
    });
    __VLS_asFunctionalSlot(slots.action)({});
    (props.action);
}
// @ts-ignore
[rootProps, imageProps, DefaultImage, titleProps, message, message, message, message, message, messageProps, actionProps,];
const __VLS_base = (await import('vue')).defineComponent({
    __typeProps: {},
});
const __VLS_export = {};
export default {};
