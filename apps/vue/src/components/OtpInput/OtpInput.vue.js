/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { useOtpInput } from './useOtpInput';
const { defineProps, } = {};
const props = defineProps();
const { containerProps, fieldsProps } = useOtpInput(props);
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
void __VLS_ctx, __VLS_components, __VLS_intrinsics, __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...(__VLS_unwrap(containerProps, {})),
});
const __VLS_0 = __VLS_tryAsConstant((__VLS_unwrap(fieldsProps, {})));
for (const [fieldProps, index] of __VLS_vFor(__VLS_nonNull(__VLS_0))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
        ...{ onInput: (fieldProps.onInput) },
        ...{ onKeydown: (fieldProps.onKeydown) },
        ...{ onFocus: (fieldProps.onFocus) },
        ...{ onPaste: (fieldProps.onPaste) },
        key: (index),
        ref: (fieldProps.ref),
        value: (fieldProps.value),
        type: (fieldProps.type),
        inputmode: (fieldProps.inputMode),
        autocomplete: (fieldProps.autocomplete),
        maxlength: (fieldProps.maxlength),
        disabled: (fieldProps.disabled),
        autofocus: (fieldProps.autofocus),
        name: (fieldProps.name),
        'aria-label': (fieldProps['aria-label']),
        'data-testid': (fieldProps['data-testid']),
        ...{ class: (fieldProps.class) },
    });
    // @ts-ignore
    [containerProps, fieldsProps,];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
