import { computed, inject, provide, ref } from 'vue';
import { slider } from '@/theme';
import { clamp, findNearestIndex, resolveSliderValue, valueToPercent } from './slider.utils';
export const SliderContextKey = Symbol('SliderContext');
export function useSliderProvider(props) {
    const { children, value: controlledValue, defaultValue, min = 0, max = 100, step = 1, showValue = false, disabled = false, color = 'primary', size = 'md', 'aria-label': ariaLabel, onValueChange, } = props;
    const uncontrolledValue = ref(defaultValue ?? min);
    const activeThumbIndex = ref(null);
    const trackRef = ref(null);
    const isControlled = computed(() => controlledValue !== undefined);
    const currentValue = computed(() => (isControlled.value ? controlledValue : uncontrolledValue.value));
    const isRange = computed(() => Array.isArray(currentValue.value));
    const values = computed(() => (isRange.value ? currentValue.value : [currentValue.value]));
    const { root } = slider();
    function updateValue(nextValue) {
        if (!isControlled.value)
            uncontrolledValue.value = nextValue;
        onValueChange?.(nextValue);
    }
    function getThumbValue(index) {
        return values.value[index] ?? min;
    }
    function getPercent(value) {
        return valueToPercent(value, min, max);
    }
    function handleThumbChange(index, rawValue) {
        updateValue(resolveSliderValue({ index, rawValue, values: values.value, isRange: isRange.value, min, max, step }));
    }
    function updateFromClientX(clientX, index) {
        const trackElement = trackRef.value;
        if (!trackElement)
            return;
        const rect = trackElement.getBoundingClientRect();
        if (rect.width === 0)
            return;
        const ratio = clamp((clientX - rect.left) / rect.width, 0, 1);
        const rawValue = min + ratio * (max - min);
        const targetIndex = index ?? (isRange.value ? findNearestIndex(values.value, rawValue) : 0);
        handleThumbChange(targetIndex, rawValue);
        activeThumbIndex.value = targetIndex;
    }
    function handleTrackPointerDown(event) {
        if (disabled)
            return;
        const target = event.target;
        if (target.closest('[role="slider"]'))
            return;
        event.currentTarget.setPointerCapture(event.pointerId);
        updateFromClientX(event.clientX);
    }
    function handleTrackPointerMove(event) {
        if (disabled || activeThumbIndex.value === null)
            return;
        updateFromClientX(event.clientX, activeThumbIndex.value);
    }
    function handleTrackPointerUp(event) {
        const el = event.currentTarget;
        if (el.hasPointerCapture(event.pointerId))
            el.releasePointerCapture(event.pointerId);
        activeThumbIndex.value = null;
    }
    function handleThumbPointerDown(index, event) {
        if (disabled)
            return;
        event.stopPropagation();
        event.currentTarget.setPointerCapture(event.pointerId);
        activeThumbIndex.value = index;
    }
    function handleThumbPointerMove(index, event) {
        if (disabled || activeThumbIndex.value !== index)
            return;
        updateFromClientX(event.clientX, index);
    }
    function handleThumbPointerUp(event) {
        const el = event.currentTarget;
        if (el.hasPointerCapture(event.pointerId))
            el.releasePointerCapture(event.pointerId);
        activeThumbIndex.value = null;
    }
    function handleThumbKeyDown(index, event) {
        if (disabled)
            return;
        const currentValueThumb = getThumbValue(index);
        switch (event.key) {
            case 'ArrowRight':
            case 'ArrowUp':
                event.preventDefault();
                handleThumbChange(index, currentValueThumb + step);
                return;
            case 'ArrowLeft':
            case 'ArrowDown':
                event.preventDefault();
                handleThumbChange(index, currentValueThumb - step);
                return;
            case 'Home':
                event.preventDefault();
                handleThumbChange(index, min);
                return;
            case 'End':
                event.preventDefault();
                handleThumbChange(index, max);
                return;
            default:
                return;
        }
    }
    const context = {
        min,
        max,
        step,
        size,
        color,
        disabled,
        showValue,
        rootLabel: ariaLabel,
        values: values.value,
        isRange: isRange.value,
        activeThumbIndex: activeThumbIndex,
        trackRef,
        getThumbValue,
        getPercent,
        handleTrackPointerDown,
        handleTrackPointerMove,
        handleTrackPointerUp,
        handleThumbPointerDown,
        handleThumbPointerMove,
        handleThumbPointerUp,
        handleThumbKeyDown,
    };
    provide(SliderContextKey, context);
    return {
        children,
        rootProps: {
            role: 'group',
            'aria-label': ariaLabel,
            'data-testid': 'slider-root',
            class: root({ size, color, disabled }),
        },
    };
}
export function useSlider() {
    const context = inject(SliderContextKey);
    if (!context) {
        throw new Error('useSlider must be used within a SliderProvider');
    }
    return context;
}
