/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { useInput } from './useInput';
const { defineProps, withDefaults, } = {};
const props = withDefaults(defineProps(), {
    type: 'text',
    label: '',
    startIcon: undefined,
    endIcon: undefined,
    class: undefined,
    id: undefined,
    variant: 'outline',
    disabled: undefined,
    required: undefined,
    placeholder: undefined,
    value: undefined,
    onChange: undefined,
});
const { containerProps, endIconProps, hasEndIcon, hasStartIcon, inputProps, labelProps, startIconProps, inputWrapperProps, } = useInput(props);
const __VLS_defaults = {
    type: 'text',
    label: '',
    startIcon: undefined,
    endIcon: undefined,
    class: undefined,
    id: undefined,
    variant: 'outline',
    disabled: undefined,
    required: undefined,
    placeholder: undefined,
    value: undefined,
    onChange: undefined,
};
void __VLS_defaults;
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
__VLS_withDotValue(containerProps, {});
// @ts-ignore
__VLS_withDotValue(hasStartIcon, {});
// @ts-ignore
__VLS_withDotValue(startIconProps, {});
// @ts-ignore
__VLS_withDotValue(inputWrapperProps, {});
// @ts-ignore
__VLS_withDotValue(inputProps, {});
// @ts-ignore
__VLS_withDotValue(labelProps, {});
// @ts-ignore
__VLS_withDotValue(hasEndIcon, {});
// @ts-ignore
__VLS_withDotValue(endIconProps, {});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: (containerProps.value.class) },
});
if (hasStartIcon.value) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        'data-testid': "input-start-icon",
        ...{ class: (startIconProps.value.class) },
    });
    var __VLS_0 = {};
    (props.startIcon);
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: (inputWrapperProps.value.class) },
});
__VLS_asFunctionalElement1(__VLS_intrinsics.input, __VLS_intrinsics.input)({
    ...(inputProps.value),
});
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    for: (inputProps.value.id),
    ...{ class: (labelProps.value.class) },
});
(props.label);
if (hasEndIcon.value) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        'data-testid': "input-end-icon",
        ...{ class: (endIconProps.value.class) },
    });
    var __VLS_2 = {};
    (props.endIcon);
}
var __VLS_1 = __VLS_0, __VLS_3 = __VLS_2;
// @ts-ignore
[containerProps, hasStartIcon, startIconProps, inputWrapperProps, inputProps, inputProps, labelProps, hasEndIcon, endIconProps,];
const __VLS_base = (await import('vue')).defineComponent({
    __typeProps: {},
    props: {},
});
const __VLS_export = {};
export default {};
