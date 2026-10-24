<script setup lang="ts">
import { useSliderRange } from './useSliderRange';
import type { UseSliderRangeProps } from './slider-range.types';

const props = defineProps<UseSliderRangeProps>();
const { rangeProps } = useSliderRange(props);
</script>

<template>
  <div v-bind="rangeProps" />
</template>
