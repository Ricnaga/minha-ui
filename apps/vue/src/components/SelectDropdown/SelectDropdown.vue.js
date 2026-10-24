/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import Popover from '../Popover/Popover.vue';
import SelectInput from './_components/SelectInput/SelectInput.vue';
import SelectItem from './_components/SelectItem/SelectItem.vue';
import { useSelectDropdown } from './useSelectDropdown';
const { isOpen, handleOpen } = useSelectDropdown();
const __VLS_ctx = {};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
void __VLS_ctx, __VLS_components, __VLS_intrinsics, __VLS_directives;
const __VLS_0 = Popover || Popover;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    // @ts-ignore
    isOpen: (__VLS_unwrap(isOpen, {})), onPopoverChange: (__VLS_unwrap(handleOpen, {})), padding: "sm", width: "trigger",
}));
const __VLS_2 = __VLS_1({
    isOpen: (__VLS_unwrap(isOpen, {})),
    onPopoverChange: (__VLS_unwrap(handleOpen, {})),
    padding: "sm",
    width: "trigger",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_nonNull(__VLS_3.slots);
const __VLS_6 = SelectInput;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
// @ts-ignore
}));
const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
const __VLS_11 = SelectItem;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
// @ts-ignore
}));
const __VLS_13 = __VLS_12({}, ...__VLS_functionalComponentArgsRest(__VLS_12));
// @ts-ignore
[isOpen, handleOpen,];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
