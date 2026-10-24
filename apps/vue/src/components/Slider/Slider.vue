<script setup lang="ts">
import { useSliderProvider } from './useSlider';
import type { UseSliderProps } from './slider.types';

const props = defineProps<UseSliderProps>();
const { rootProps } = useSliderProvider(props);
</script>

<template>
  <div v-bind="rootProps">
    <slot />
  </div>
</template>
