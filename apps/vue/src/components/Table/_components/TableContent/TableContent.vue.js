/// <reference types="../../../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { computed } from 'vue';
import EmptyState from '../../../EmptyState/EmptyState.vue';
import ErrorState from '../../../ErrorState/ErrorState.vue';
import Skeleton from '../../../Skeleton/Skeleton.vue';
import TableBody from '../../../TableBody/TableBody.vue';
import TableCell from '../../../TableCell/TableCell.vue';
import TableRow from '../../../TableRow/TableRow.vue';
import { table } from '@/theme';
import { useTableConfig, useTableData } from '../../../TableProvider/useTableProvider';
const { defineProps, } = {};
const props = defineProps();
const { columns } = useTableConfig();
const dataCtx = useTableData();
const { stateCell } = table();
const loadingProps = computed(() => dataCtx?.loadingProps);
const emptyProps = computed(() => dataCtx?.emptyProps);
const errorProps = computed(() => dataCtx?.errorProps);
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
__VLS_withDotValue(loadingProps, {});
// @ts-ignore
__VLS_withDotValue(columns, {});
// @ts-ignore
__VLS_withDotValue(emptyProps, {});
// @ts-ignore
__VLS_withDotValue(errorProps, {});
if (props.status == null) {
    const __VLS_0 = TableBody || TableBody;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    // @ts-ignore
    }));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const { default: __VLS_5 } = __VLS_nonNull(__VLS_3.slots);
    var __VLS_6 = {};
    var __VLS_3;
}
else if (props.status === 'loading') {
    const __VLS_8 = TableBody || TableBody;
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
    // @ts-ignore
    }));
    const __VLS_10 = __VLS_9({}, ...__VLS_functionalComponentArgsRest(__VLS_9));
    const { default: __VLS_13 } = __VLS_nonNull(__VLS_11.slots);
    if (loadingProps.value?.fallback) {
        const __VLS_14 = TableRow || TableRow;
        // @ts-ignore
        const __VLS_15 = __VLS_asFunctionalComponent1(__VLS_14, new __VLS_14({
        // @ts-ignore
        }));
        const __VLS_16 = __VLS_15({}, ...__VLS_functionalComponentArgsRest(__VLS_15));
        const { default: __VLS_19 } = __VLS_nonNull(__VLS_17.slots);
        const __VLS_20 = TableCell || TableCell;
        // @ts-ignore
        const __VLS_21 = __VLS_asFunctionalComponent1(__VLS_20, new __VLS_20({
            // @ts-ignore
            colspan: (columns.value.length),
        }));
        const __VLS_22 = __VLS_21({
            colspan: (columns.value.length),
        }, ...__VLS_functionalComponentArgsRest(__VLS_21));
        const { default: __VLS_25 } = __VLS_nonNull(__VLS_23.slots);
        const __VLS_26 = (loadingProps.value.fallback);
        // @ts-ignore
        const __VLS_27 = __VLS_asFunctionalComponent1(__VLS_26, new __VLS_26({
        // @ts-ignore
        }));
        const __VLS_28 = __VLS_27({}, ...__VLS_functionalComponentArgsRest(__VLS_27));
        // @ts-ignore
        [loadingProps, loadingProps, columns,];
        var __VLS_23;
        // @ts-ignore
        [];
        var __VLS_17;
    }
    else {
        const __VLS_31 = TableRow || TableRow;
        // @ts-ignore
        const __VLS_32 = __VLS_asFunctionalComponent1(__VLS_31, new __VLS_31({
        // @ts-ignore
        }));
        const __VLS_33 = __VLS_32({}, ...__VLS_functionalComponentArgsRest(__VLS_32));
        const { default: __VLS_36 } = __VLS_nonNull(__VLS_34.slots);
        const __VLS_37 = TableCell || TableCell;
        // @ts-ignore
        const __VLS_38 = __VLS_asFunctionalComponent1(__VLS_37, new __VLS_37({
            // @ts-ignore
            colspan: (columns.value.length), ...{ class: (__VLS_unwrap(stateCell, {})()) },
        }));
        const __VLS_39 = __VLS_38({
            colspan: (columns.value.length),
            ...{ class: (__VLS_unwrap(stateCell, {})()) },
        }, ...__VLS_functionalComponentArgsRest(__VLS_38));
        const { default: __VLS_42 } = __VLS_nonNull(__VLS_40.slots);
        const __VLS_43 = __VLS_tryAsConstant(((loadingProps.value?.rows ?? 3)));
        for (const [i] of __VLS_vFor(__VLS_nonNull(__VLS_43))) {
            const __VLS_44 = Skeleton;
            // @ts-ignore
            const __VLS_45 = __VLS_asFunctionalComponent1(__VLS_44, new __VLS_44({
                // @ts-ignore
                key: (i), height: "2.5rem", ...{ class: "mb-2" },
            }));
            const __VLS_46 = __VLS_45({
                key: (i),
                height: "2.5rem",
                ...{ class: "mb-2" },
            }, ...__VLS_functionalComponentArgsRest(__VLS_45));
            /** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
            // @ts-ignore
            [loadingProps, columns, stateCell,];
        }
        // @ts-ignore
        [];
        var __VLS_40;
        // @ts-ignore
        [];
        var __VLS_34;
    }
    // @ts-ignore
    [];
    var __VLS_11;
}
else if (props.status === 'empty') {
    const __VLS_49 = TableBody || TableBody;
    // @ts-ignore
    const __VLS_50 = __VLS_asFunctionalComponent1(__VLS_49, new __VLS_49({
    // @ts-ignore
    }));
    const __VLS_51 = __VLS_50({}, ...__VLS_functionalComponentArgsRest(__VLS_50));
    const { default: __VLS_54 } = __VLS_nonNull(__VLS_52.slots);
    const __VLS_55 = TableRow || TableRow;
    // @ts-ignore
    const __VLS_56 = __VLS_asFunctionalComponent1(__VLS_55, new __VLS_55({
    // @ts-ignore
    }));
    const __VLS_57 = __VLS_56({}, ...__VLS_functionalComponentArgsRest(__VLS_56));
    const { default: __VLS_60 } = __VLS_nonNull(__VLS_58.slots);
    const __VLS_61 = TableCell || TableCell;
    // @ts-ignore
    const __VLS_62 = __VLS_asFunctionalComponent1(__VLS_61, new __VLS_61({
        // @ts-ignore
        colspan: (columns.value.length), ...{ class: (__VLS_unwrap(stateCell, {})()) },
    }));
    const __VLS_63 = __VLS_62({
        colspan: (columns.value.length),
        ...{ class: (__VLS_unwrap(stateCell, {})()) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_62));
    const { default: __VLS_66 } = __VLS_nonNull(__VLS_64.slots);
    const __VLS_67 = EmptyState;
    // @ts-ignore
    const __VLS_68 = __VLS_asFunctionalComponent1(__VLS_67, new __VLS_67({
        // @ts-ignore
        ...(emptyProps.value || {}),
    }));
    const __VLS_69 = __VLS_68({
        ...(emptyProps.value || {}),
    }, ...__VLS_functionalComponentArgsRest(__VLS_68));
    // @ts-ignore
    [columns, stateCell, emptyProps,];
    var __VLS_64;
    // @ts-ignore
    [];
    var __VLS_58;
    // @ts-ignore
    [];
    var __VLS_52;
}
else if (props.status === 'error') {
    const __VLS_72 = TableBody || TableBody;
    // @ts-ignore
    const __VLS_73 = __VLS_asFunctionalComponent1(__VLS_72, new __VLS_72({
    // @ts-ignore
    }));
    const __VLS_74 = __VLS_73({}, ...__VLS_functionalComponentArgsRest(__VLS_73));
    const { default: __VLS_77 } = __VLS_nonNull(__VLS_75.slots);
    const __VLS_78 = TableRow || TableRow;
    // @ts-ignore
    const __VLS_79 = __VLS_asFunctionalComponent1(__VLS_78, new __VLS_78({
    // @ts-ignore
    }));
    const __VLS_80 = __VLS_79({}, ...__VLS_functionalComponentArgsRest(__VLS_79));
    const { default: __VLS_83 } = __VLS_nonNull(__VLS_81.slots);
    const __VLS_84 = TableCell || TableCell;
    // @ts-ignore
    const __VLS_85 = __VLS_asFunctionalComponent1(__VLS_84, new __VLS_84({
        // @ts-ignore
        colspan: (columns.value.length), ...{ class: (__VLS_unwrap(stateCell, {})()) },
    }));
    const __VLS_86 = __VLS_85({
        colspan: (columns.value.length),
        ...{ class: (__VLS_unwrap(stateCell, {})()) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_85));
    const { default: __VLS_89 } = __VLS_nonNull(__VLS_87.slots);
    const __VLS_90 = ErrorState;
    // @ts-ignore
    const __VLS_91 = __VLS_asFunctionalComponent1(__VLS_90, new __VLS_90({
        // @ts-ignore
        ...(errorProps.value || {}),
    }));
    const __VLS_92 = __VLS_91({
        ...(errorProps.value || {}),
    }, ...__VLS_functionalComponentArgsRest(__VLS_91));
    // @ts-ignore
    [columns, stateCell, errorProps,];
    var __VLS_87;
    // @ts-ignore
    [];
    var __VLS_81;
    // @ts-ignore
    [];
    var __VLS_75;
}
var __VLS_7 = __VLS_6;
// @ts-ignore
[];
const __VLS_base = (await import('vue')).defineComponent({
    __typeProps: {},
});
const __VLS_export = {};
export default {};
