/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { useStepperItem } from './useStepperItem';
const { defineProps, } = {};
const props = defineProps();
const { baseStyles, indicatorContainerStyles, indicatorContentStyles, contentStyles, titleStyles, descriptionStyles, connectorStyles, onStepClick, isLast, state, title, descriptionText, } = useStepperItem(props);
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
__VLS_withDotValue(state, {});
// @ts-ignore
__VLS_withDotValue(descriptionText, {});
// @ts-ignore
__VLS_withDotValue(isLast, {});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ onClick: (__VLS_unwrap(onStepClick, {})) },
    ...{ class: (__VLS_unwrap(baseStyles, {})) },
});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: (__VLS_unwrap(indicatorContainerStyles, {})) },
});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: (__VLS_unwrap(indicatorContentStyles, {})) },
});
(state.value === 'completed' ? '✓' : __VLS_ctx.index + 1);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: (__VLS_unwrap(contentStyles, {})) },
});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: (__VLS_unwrap(titleStyles, {})) },
});
(__VLS_unwrap(title, {}));
if (descriptionText.value) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: (__VLS_unwrap(descriptionStyles, {})) },
    });
    (descriptionText.value);
}
if (!isLast.value) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div)({
        ...{ class: (__VLS_unwrap(connectorStyles, {})) },
    });
}
// @ts-ignore
[onStepClick, baseStyles, indicatorContainerStyles, indicatorContentStyles, state, index, contentStyles, titleStyles, title, descriptionText, descriptionText, descriptionStyles, isLast, connectorStyles,];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
