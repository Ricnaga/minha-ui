/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { useSwitch } from './useSwitch';
const { defineProps, } = {};
const props = defineProps();
const { containerProps, trackProps, labelProps, hasLabel, labelContent } = useSwitch(props);
const tp = trackProps;
const cp = containerProps;
const lp = labelProps;
function onChange(e) {
    const fn = tp.onChange;
    fn?.(e);
}
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
__VLS_withDotValue(cp, {});
// @ts-ignore
__VLS_withDotValue(tp, {});
// @ts-ignore
__VLS_withDotValue(hasLabel, {});
// @ts-ignore
__VLS_withDotValue(lp, {});
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: (cp.value.class) },
});
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ onChange: (onChange) },
    type: tp.value.type,
    role: tp.value.role,
    id: tp.value.id,
    disabled: tp.value.disabled,
    checked: tp.value.checked,
    defaultChecked: tp.value.defaultChecked,
    ...{ class: tp.value.class },
});
if (hasLabel.value) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: (lp.value.class) },
    });
    (__VLS_unwrap(labelContent, {}));
}
// @ts-ignore
[cp, tp, tp, tp, tp, tp, tp, tp, hasLabel, lp, labelContent,];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
