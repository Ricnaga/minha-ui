<script setup lang="ts">
import { useSliderThumb } from './useSliderThumb';
import type { UseSliderThumbProps } from './slider-thumb.types';

const props = defineProps<UseSliderThumbProps>();
const { thumbProps, bubbleProps, showValue, valueLabel } = useSliderThumb(props);
</script>

<template>
  <div v-bind="thumbProps">
    <span v-if="showValue" v-bind="bubbleProps">{{ valueLabel }}</span>
  </div>
</template>
