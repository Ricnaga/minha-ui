/// <reference types="../../../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import PopoverContent from '../../../PopoverContent/PopoverContent.vue';
import { selectItem } from '@/theme';
import { useSelectItem } from './useSelectItem';
const { item, list } = selectItem();
const { options, handleChangeItem, handleSelectedItem } = useSelectItem();
const __VLS_ctx = {};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
void __VLS_ctx, __VLS_components, __VLS_intrinsics, __VLS_directives;
const __VLS_0 = PopoverContent || PopoverContent;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
// @ts-ignore
}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_nonNull(__VLS_3.slots);
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
    ...{ class: (__VLS_unwrap(list, {})()) },
});
const __VLS_6 = __VLS_tryAsConstant((__VLS_unwrap(options, {})));
for (const [option] of __VLS_vFor(__VLS_nonNull(__VLS_6))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
        ...{ onClick: // @ts-ignore
            (...[$event]) => {
                void $event;
                return (__VLS_unwrap(handleChangeItem, {})(option));
                // @ts-ignore
                [list, options, handleChangeItem,];
            } },
        key: (option.key),
        ...{ class: (__VLS_unwrap(item, {})({ isSelected: __VLS_unwrap(handleSelectedItem, {})(option) })) },
    });
    (option.value);
    // @ts-ignore
    [item, handleSelectedItem,];
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
