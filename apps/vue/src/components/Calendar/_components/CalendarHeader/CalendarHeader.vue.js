/// <reference types="../../../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { calendar } from '@/theme';
import { useCalendarHeader } from './useCalendarHeader';
import { PhCaretLeft, PhCaretRight } from '@phosphor-icons/vue';
const { headerWrapper, headerButton, headerLabel } = calendar();
const { label, goToNextMonth, goToPrevMonth } = useCalendarHeader();
const __VLS_ctx = {};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
void __VLS_ctx, __VLS_components, __VLS_intrinsics, __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.header, __VLS_intrinsics.header)({
    ...{ class: (__VLS_unwrap(headerWrapper, {})()) },
});
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_unwrap(goToPrevMonth, {})) },
    ...{ class: (__VLS_unwrap(headerButton, {})()) },
    'aria-label': "Mês anterior",
});
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.PhCaretLeft} */
PhCaretLeft;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
// @ts-ignore
}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({
    ...{ class: (__VLS_unwrap(headerLabel, {})()) },
});
(__VLS_unwrap(label, {}));
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_unwrap(goToNextMonth, {})) },
    ...{ class: (__VLS_unwrap(headerButton, {})()) },
    'aria-label': "Próximo mês",
});
let __VLS_5;
/** @ts-ignore @type { | typeof __VLS_components.PhCaretRight} */
PhCaretRight;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
// @ts-ignore
}));
const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
// @ts-ignore
[headerWrapper, goToPrevMonth, headerButton, headerButton, headerLabel, label, goToNextMonth,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
