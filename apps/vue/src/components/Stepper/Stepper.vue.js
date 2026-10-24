/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { stepper } from '@/theme';
import { useStepperContext } from '../StepperProvider';
import StepperItem from '../StepperItem/StepperItem.vue';
const { steps, orientation } = useStepperContext();
const isHorizontal = orientation === 'horizontal';
const __VLS_ctx = {};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
void __VLS_ctx, __VLS_components, __VLS_intrinsics, __VLS_directives;
// @ts-ignore
__VLS_withDotValue(isHorizontal, {});
// @ts-ignore
__VLS_withDotValue(steps, {});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: (__VLS_unwrap(stepper, {})({ orientation: __VLS_unwrap(orientation, {}) })) },
    role: "group",
    'aria-label': "Etapas",
    tabindex: (isHorizontal.value ? 0 : undefined),
});
const __VLS_0 = __VLS_tryAsConstant((steps.value));
for (const [step, index] of __VLS_vFor(__VLS_nonNull(__VLS_0))) {
    const __VLS_1 = StepperItem;
    // @ts-ignore
    const __VLS_2 = __VLS_asFunctionalComponent1(__VLS_1, new __VLS_1({
        // @ts-ignore
        key: (step.id), index: (index), title: (step.title), description: (step.description), isLast: (index === steps.value.length - 1),
    }));
    const __VLS_3 = __VLS_2({
        key: (step.id),
        index: (index),
        title: (step.title),
        description: (step.description),
        isLast: (index === steps.value.length - 1),
    }, ...__VLS_functionalComponentArgsRest(__VLS_2));
    // @ts-ignore
    [stepper, orientation, isHorizontal, steps, steps,];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
