/// <reference types="../../../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { useChartBars } from './useChartBars';
const { points, innerHeight, barProps } = useChartBars();
const __VLS_ctx = {};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
void __VLS_ctx, __VLS_components, __VLS_intrinsics, __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.g, __VLS_intrinsics.g)({
    'data-part': "bars",
});
const __VLS_0 = __VLS_tryAsConstant((__VLS_unwrap(points, {})));
for (const [point, index] of __VLS_vFor(__VLS_nonNull(__VLS_0))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.rect)({
        key: (point.label),
        x: (point.barX),
        y: (point.y),
        width: (point.barWidth),
        height: (Math.max(__VLS_unwrap(innerHeight, {}) - point.y, 0)),
        rx: (2),
        ...{ style: ({ animationDelay: `${Math.min(index * 25, 200)}ms` }) },
        ...(__VLS_unwrap(barProps, {})),
    });
    // @ts-ignore
    [points, innerHeight, barProps,];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
