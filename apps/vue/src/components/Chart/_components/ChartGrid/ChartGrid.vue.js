/// <reference types="../../../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { useChartGrid } from './useChartGrid';
const { lines, innerWidth, lineProps } = useChartGrid();
const __VLS_ctx = {};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
void __VLS_ctx, __VLS_components, __VLS_intrinsics, __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.g, __VLS_intrinsics.g)({
    'data-part': "grid",
});
const __VLS_0 = __VLS_tryAsConstant((__VLS_unwrap(lines, {})));
for (const [line] of __VLS_vFor(__VLS_nonNull(__VLS_0))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.line)({
        key: (line.tick),
        x1: (0),
        x2: (__VLS_unwrap(innerWidth, {})),
        y1: (line.y),
        y2: (line.y),
        ...(__VLS_unwrap(lineProps, {})),
    });
    // @ts-ignore
    [lines, innerWidth, lineProps,];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
