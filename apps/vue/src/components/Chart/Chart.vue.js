/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import ChartAxis from './_components/ChartAxis/ChartAxis.vue';
import ChartBars from './_components/ChartBars/ChartBars.vue';
import ChartGrid from './_components/ChartGrid/ChartGrid.vue';
import ChartLine from './_components/ChartLine/ChartLine.vue';
import ChartValueLabels from './_components/ChartValueLabels/ChartValueLabels.vue';
import { useChartProvider } from './useChart';
const { defineProps, } = {};
const props = defineProps();
const { chartProps, svgProps, type, showGrid, showAxis, showValueLabels, margin, data, valueFormatter, ariaLabel, } = useChartProvider(props);
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
__VLS_withDotValue(margin, {});
// @ts-ignore
__VLS_withDotValue(showGrid, {});
// @ts-ignore
__VLS_withDotValue(showAxis, {});
// @ts-ignore
__VLS_withDotValue(type, {});
// @ts-ignore
__VLS_withDotValue(showValueLabels, {});
__VLS_asFunctionalElement1(__VLS_intrinsics.figure, __VLS_intrinsics.figure)({
    ...(__VLS_unwrap(chartProps, {})),
});
__VLS_asFunctionalElement1(__VLS_intrinsics.svg, __VLS_intrinsics.svg)({
    ...(__VLS_unwrap(svgProps, {})),
});
__VLS_asFunctionalElement1(__VLS_intrinsics.title, __VLS_intrinsics.title)({});
(__VLS_unwrap(ariaLabel, {}));
__VLS_asFunctionalElement1(__VLS_intrinsics.g, __VLS_intrinsics.g)({
    transform: (`translate(${margin.value.left} ${margin.value.top})`),
});
if (showGrid.value) {
    const __VLS_0 = ChartGrid;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    // @ts-ignore
    }));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
}
if (showAxis.value) {
    const __VLS_5 = ChartAxis;
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
        // @ts-ignore
        orientation: "y",
    }));
    const __VLS_7 = __VLS_6({
        orientation: "y",
    }, ...__VLS_functionalComponentArgsRest(__VLS_6));
}
if (showAxis.value) {
    const __VLS_10 = ChartAxis;
    // @ts-ignore
    const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({
        // @ts-ignore
        orientation: "x",
    }));
    const __VLS_12 = __VLS_11({
        orientation: "x",
    }, ...__VLS_functionalComponentArgsRest(__VLS_11));
}
if (type.value === 'bar') {
    const __VLS_15 = ChartBars;
    // @ts-ignore
    const __VLS_16 = __VLS_asFunctionalComponent1(__VLS_15, new __VLS_15({
    // @ts-ignore
    }));
    const __VLS_17 = __VLS_16({}, ...__VLS_functionalComponentArgsRest(__VLS_16));
}
if (type.value === 'line') {
    const __VLS_20 = ChartLine;
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent1(__VLS_20, new __VLS_20({
    // @ts-ignore
    }));
    const __VLS_22 = __VLS_21({}, ...__VLS_functionalComponentArgsRest(__VLS_21));
}
if (showValueLabels.value) {
    const __VLS_25 = ChartValueLabels;
    // @ts-ignore
    const __VLS_26 = __VLS_asFunctionalComponent1(__VLS_25, new __VLS_25({
    // @ts-ignore
    }));
    const __VLS_27 = __VLS_26({}, ...__VLS_functionalComponentArgsRest(__VLS_26));
}
__VLS_asFunctionalElement1(__VLS_intrinsics.table, __VLS_intrinsics.table)({
    ...{ class: "sr-only" },
});
/** @type {__VLS_StyleScopedClasses['sr-only']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.caption, __VLS_intrinsics.caption)({});
(__VLS_unwrap(ariaLabel, {}));
__VLS_asFunctionalElement1(__VLS_intrinsics.thead, __VLS_intrinsics.thead)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({
    scope: "col",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({
    scope: "col",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.tbody, __VLS_intrinsics.tbody)({});
const __VLS_30 = __VLS_tryAsConstant((__VLS_unwrap(data, {})));
for (const [point] of __VLS_vFor(__VLS_nonNull(__VLS_30))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({
        key: (point.label),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({
        scope: "row",
    });
    (point.label);
    __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
    (__VLS_unwrap(valueFormatter, {})(point.value));
    // @ts-ignore
    [chartProps, svgProps, ariaLabel, ariaLabel, margin, margin, showGrid, showAxis, showAxis, type, type, showValueLabels, data, valueFormatter,];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
