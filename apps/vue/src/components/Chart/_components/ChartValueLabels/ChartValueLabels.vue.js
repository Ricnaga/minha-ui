/// <reference types="../../../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { useChartValueLabels } from './useChartValueLabels';
const { labels, labelProps } = useChartValueLabels();
const __VLS_ctx = {};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
void __VLS_ctx, __VLS_components, __VLS_intrinsics, __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.g, __VLS_intrinsics.g)({
    'data-part': "value-labels",
});
const __VLS_0 = __VLS_tryAsConstant((__VLS_unwrap(labels, {})));
for (const [label] of __VLS_vFor(__VLS_nonNull(__VLS_0))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.text, __VLS_intrinsics.text)({
        key: (label.label),
        x: (label.x),
        y: (label.y),
        'text-anchor': "middle",
        ...(__VLS_unwrap(labelProps, {})),
    });
    (label.text);
    // @ts-ignore
    [labels, labelProps,];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
