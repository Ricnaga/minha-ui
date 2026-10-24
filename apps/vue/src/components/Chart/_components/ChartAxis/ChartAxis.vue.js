/// <reference types="../../../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { useChartAxis } from './useChartAxis';
const { defineProps, } = {};
const props = defineProps();
const axis = useChartAxis(props.orientation);
const labels = axis.labels;
const axisLineProps = axis.axisLineProps;
const axisLabelProps = axis.axisLabelProps;
const transform = axis.transform;
const orientation = axis.orientation;
const innerWidth = axis.innerWidth;
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
__VLS_withDotValue(orientation, {});
// @ts-ignore
__VLS_withDotValue(innerWidth, {});
__VLS_asFunctionalElement1(__VLS_intrinsics.g, __VLS_intrinsics.g)({
    'data-part': (orientation.value === 'y' ? 'axis-y' : 'axis-x'),
    transform: (__VLS_unwrap(transform, {})),
});
if (orientation.value === 'y') {
    const __VLS_0 = __VLS_tryAsConstant((__VLS_unwrap(labels, {})));
    for (const [label] of __VLS_vFor(__VLS_nonNull(__VLS_0))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.text, __VLS_intrinsics.text)({
            key: (label.tick),
            x: (-8),
            y: (label.y + 4),
            'text-anchor': "end",
            ...(__VLS_unwrap(axisLabelProps, {})),
        });
        (label.tick);
        // @ts-ignore
        [orientation, orientation, transform, labels, axisLabelProps,];
    }
}
else {
    __VLS_asFunctionalElement1(__VLS_intrinsics.line)({
        x1: (0),
        x2: ((innerWidth.value || 0)),
        y1: (0),
        y2: (0),
        ...(__VLS_unwrap(axisLineProps, {})),
    });
    const __VLS_1 = __VLS_tryAsConstant((__VLS_unwrap(labels, {})));
    for (const [label] of __VLS_vFor(__VLS_nonNull(__VLS_1))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.text, __VLS_intrinsics.text)({
            key: (label.x),
            x: (label.x),
            y: (16),
            'text-anchor': "middle",
            ...(__VLS_unwrap(axisLabelProps, {})),
        });
        (label.label);
        // @ts-ignore
        [labels, axisLabelProps, innerWidth, axisLineProps,];
    }
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
