/// <reference types="../../../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { useChartLine } from './useChartLine';
const { points, coordinates, lineProps, pointProps } = useChartLine();
const __VLS_ctx = {};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
void __VLS_ctx, __VLS_components, __VLS_intrinsics, __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.g, __VLS_intrinsics.g)({
    'data-part': "line",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.polyline)({
    points: (__VLS_unwrap(coordinates, {})),
    pathLength: "1",
    ...(__VLS_unwrap(lineProps, {})),
});
const __VLS_0 = __VLS_tryAsConstant((__VLS_unwrap(points, {})));
for (const [point, index] of __VLS_vFor(__VLS_nonNull(__VLS_0))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.circle)({
        key: (point.label),
        cx: (point.x),
        cy: (point.y),
        r: (3),
        ...{ style: ({ animationDelay: `${100 + index * 60}ms` }) },
        ...(__VLS_unwrap(pointProps, {})),
    });
    // @ts-ignore
    [coordinates, lineProps, points, pointProps,];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
