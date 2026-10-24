/// <reference types="../../../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../../../../../node_modules/.pnpm/@vue+language-core@3.3.13/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { paginationControls } from '@/theme';
const { defineProps, } = {};
const props = defineProps();
const { ellipsis, buttonPage } = paginationControls();
const isActive = typeof props.item === 'number' && props.item === props.currentPage;
const isEllipsis = props.item === '...';
function handleClick() {
    if (isEllipsis)
        return;
    props.onPageChange?.();
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
__VLS_withDotValue(isEllipsis, {});
if (isEllipsis.value) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ class: (__VLS_unwrap(ellipsis, {})()) },
        disabled: true,
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
}
else {
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: (handleClick) },
        ...{ class: (__VLS_unwrap(buttonPage, {})({ isCurrentPage: __VLS_unwrap(isActive, {}) })) },
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (props.item);
}
// @ts-ignore
[isEllipsis, ellipsis, buttonPage, isActive,];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
